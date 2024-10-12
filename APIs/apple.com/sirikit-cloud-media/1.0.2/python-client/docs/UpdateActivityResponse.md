# UpdateActivityResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queue** | [**Queue**](Queue.md) |  | [optional] 
**user_activity** | [**UserActivity**](UserActivity.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_activity_response import UpdateActivityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateActivityResponse from a JSON string
update_activity_response_instance = UpdateActivityResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateActivityResponse.to_json())

# convert the object into a dict
update_activity_response_dict = update_activity_response_instance.to_dict()
# create an instance of UpdateActivityResponse from a dict
update_activity_response_from_dict = UpdateActivityResponse.from_dict(update_activity_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


