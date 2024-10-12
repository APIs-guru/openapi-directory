# Flag

Contains information about flagged user or message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved_at** | **datetime** | Date of the approval | [optional] 
**created_at** | **datetime** | Date/time of creation | 
**created_by_automod** | **bool** |  | 
**details** | [**FlagDetails**](FlagDetails.md) |  | [optional] 
**rejected_at** | **datetime** | Date of the rejection | [optional] 
**reviewed_at** | **datetime** | Date of the review | [optional] 
**target_message** | [**Message**](Message.md) |  | [optional] 
**target_message_id** | **str** | ID of flagged message | [optional] 
**target_user** | [**UserObject**](UserObject.md) |  | [optional] 
**updated_at** | **datetime** | Date/time of the last update | 
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.flag import Flag

# TODO update the JSON string below
json = "{}"
# create an instance of Flag from a JSON string
flag_instance = Flag.from_json(json)
# print the JSON string representation of the object
print(Flag.to_json())

# convert the object into a dict
flag_dict = flag_instance.to_dict()
# create an instance of Flag from a dict
flag_from_dict = Flag.from_dict(flag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


