# Explanation

Explanation about the IAM policy search result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matched_permissions** | [**Dict[str, Permissions]**](Permissions.md) | The map from roles to their included permissions that match the permission query (i.e., a query containing &#x60;policy.role.permissions:&#x60;). Example: if query &#x60;policy.role.permissions:compute.disk.get&#x60; matches a policy binding that contains owner role, the matched_permissions will be &#x60;{\&quot;roles/owner\&quot;: [\&quot;compute.disk.get\&quot;]}&#x60;. The roles can also be found in the returned &#x60;policy&#x60; bindings. Note that the map is populated only for requests with permission queries. | [optional] 

## Example

```python
from openapi_client.models.explanation import Explanation

# TODO update the JSON string below
json = "{}"
# create an instance of Explanation from a JSON string
explanation_instance = Explanation.from_json(json)
# print the JSON string representation of the object
print(Explanation.to_json())

# convert the object into a dict
explanation_dict = explanation_instance.to_dict()
# create an instance of Explanation from a dict
explanation_from_dict = Explanation.from_dict(explanation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


