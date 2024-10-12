# BackOfficeRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the role | 
**name** | **str** | The name of the role | 

## Example

```python
from openapi_client.models.back_office_role import BackOfficeRole

# TODO update the JSON string below
json = "{}"
# create an instance of BackOfficeRole from a JSON string
back_office_role_instance = BackOfficeRole.from_json(json)
# print the JSON string representation of the object
print(BackOfficeRole.to_json())

# convert the object into a dict
back_office_role_dict = back_office_role_instance.to_dict()
# create an instance of BackOfficeRole from a dict
back_office_role_from_dict = BackOfficeRole.from_dict(back_office_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


