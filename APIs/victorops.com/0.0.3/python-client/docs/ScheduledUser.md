# ScheduledUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.scheduled_user import ScheduledUser

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledUser from a JSON string
scheduled_user_instance = ScheduledUser.from_json(json)
# print the JSON string representation of the object
print(ScheduledUser.to_json())

# convert the object into a dict
scheduled_user_dict = scheduled_user_instance.to_dict()
# create an instance of ScheduledUser from a dict
scheduled_user_from_dict = ScheduledUser.from_dict(scheduled_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


