# UpdatePasswordInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_password** | **str** |  | [optional] 
**new_password** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.update_password_info import UpdatePasswordInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePasswordInfo from a JSON string
update_password_info_instance = UpdatePasswordInfo.from_json(json)
# print the JSON string representation of the object
print(UpdatePasswordInfo.to_json())

# convert the object into a dict
update_password_info_dict = update_password_info_instance.to_dict()
# create an instance of UpdatePasswordInfo from a dict
update_password_info_from_dict = UpdatePasswordInfo.from_dict(update_password_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


