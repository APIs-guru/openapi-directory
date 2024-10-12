# Editors

The editors of a protected range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_users_can_edit** | **bool** | True if anyone in the document&#39;s domain has edit access to the protected range. Domain protection is only supported on documents within a domain. | [optional] 
**groups** | **List[str]** | The email addresses of groups with edit access to the protected range. | [optional] 
**users** | **List[str]** | The email addresses of users with edit access to the protected range. | [optional] 

## Example

```python
from openapi_client.models.editors import Editors

# TODO update the JSON string below
json = "{}"
# create an instance of Editors from a JSON string
editors_instance = Editors.from_json(json)
# print the JSON string representation of the object
print(Editors.to_json())

# convert the object into a dict
editors_dict = editors_instance.to_dict()
# create an instance of Editors from a dict
editors_from_dict = Editors.from_dict(editors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


