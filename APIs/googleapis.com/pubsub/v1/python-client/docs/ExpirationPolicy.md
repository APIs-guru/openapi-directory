# ExpirationPolicy

A policy that specifies the conditions for resource expiration (i.e., automatic resource deletion).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ttl** | **str** | Optional. Specifies the \&quot;time-to-live\&quot; duration for an associated resource. The resource expires if it is not active for a period of &#x60;ttl&#x60;. The definition of \&quot;activity\&quot; depends on the type of the associated resource. The minimum and maximum allowed values for &#x60;ttl&#x60; depend on the type of the associated resource, as well. If &#x60;ttl&#x60; is not set, the associated resource never expires. | [optional] 

## Example

```python
from openapi_client.models.expiration_policy import ExpirationPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ExpirationPolicy from a JSON string
expiration_policy_instance = ExpirationPolicy.from_json(json)
# print the JSON string representation of the object
print(ExpirationPolicy.to_json())

# convert the object into a dict
expiration_policy_dict = expiration_policy_instance.to_dict()
# create an instance of ExpirationPolicy from a dict
expiration_policy_from_dict = ExpirationPolicy.from_dict(expiration_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


