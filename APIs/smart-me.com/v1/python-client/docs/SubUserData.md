# SubUserData

Container data for the sub user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_end_date** | **datetime** | The end date. until this date the user has access | [optional] 
**access_time_start_date** | **datetime** | The start date. From this date the user has access | [optional] 
**email** | **str** | The Email adress | [optional] 
**id** | **str** | The ID of the user | [optional] 
**new_password** | **str** | If set this is used a new password | [optional] 
**permission_level** | **str** | The permission level of the user | [optional] 
**username** | **str** | The username | [optional] 

## Example

```python
from openapi_client.models.sub_user_data import SubUserData

# TODO update the JSON string below
json = "{}"
# create an instance of SubUserData from a JSON string
sub_user_data_instance = SubUserData.from_json(json)
# print the JSON string representation of the object
print(SubUserData.to_json())

# convert the object into a dict
sub_user_data_dict = sub_user_data_instance.to_dict()
# create an instance of SubUserData from a dict
sub_user_data_from_dict = SubUserData.from_dict(sub_user_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


