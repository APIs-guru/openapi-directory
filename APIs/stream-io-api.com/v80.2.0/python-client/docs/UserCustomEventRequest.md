# UserCustomEventRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.user_custom_event_request import UserCustomEventRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UserCustomEventRequest from a JSON string
user_custom_event_request_instance = UserCustomEventRequest.from_json(json)
# print the JSON string representation of the object
print(UserCustomEventRequest.to_json())

# convert the object into a dict
user_custom_event_request_dict = user_custom_event_request_instance.to_dict()
# create an instance of UserCustomEventRequest from a dict
user_custom_event_request_from_dict = UserCustomEventRequest.from_dict(user_custom_event_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


