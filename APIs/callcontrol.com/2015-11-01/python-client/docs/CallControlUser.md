# CallControlUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age** | **int** |  | [optional] 
**black_list** | **List[str]** |  | [optional] 
**block_behavior** | **str** |  | [optional] 
**break_through_qh_with_multiple_calls** | **bool** |  | [optional] 
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**gender** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**middle_name** | **str** |  | [optional] 
**phone_numbe_region** | **str** |  | [optional] 
**phone_number** | **str** |  | [optional] 
**quiet_hour_list** | [**List[QuietHour]**](QuietHour.md) |  | [optional] 
**salutation** | **str** |  | [optional] 
**suffix** | **str** |  | [optional] 
**use_community_blacklist** | **bool** |  | [optional] 
**white_list** | **List[str]** |  | [optional] 
**white_list_breaks_qh** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.call_control_user import CallControlUser

# TODO update the JSON string below
json = "{}"
# create an instance of CallControlUser from a JSON string
call_control_user_instance = CallControlUser.from_json(json)
# print the JSON string representation of the object
print(CallControlUser.to_json())

# convert the object into a dict
call_control_user_dict = call_control_user_instance.to_dict()
# create an instance of CallControlUser from a dict
call_control_user_from_dict = CallControlUser.from_dict(call_control_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


