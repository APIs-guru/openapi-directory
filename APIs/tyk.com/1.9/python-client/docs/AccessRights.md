# AccessRights


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_id** | **str** |  | [optional] 
**api_name** | **str** |  | [optional] 
**versions** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.access_rights import AccessRights

# TODO update the JSON string below
json = "{}"
# create an instance of AccessRights from a JSON string
access_rights_instance = AccessRights.from_json(json)
# print the JSON string representation of the object
print(AccessRights.to_json())

# convert the object into a dict
access_rights_dict = access_rights_instance.to_dict()
# create an instance of AccessRights from a dict
access_rights_from_dict = AccessRights.from_dict(access_rights_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


