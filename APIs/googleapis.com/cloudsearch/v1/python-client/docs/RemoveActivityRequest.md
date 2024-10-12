# RemoveActivityRequest

Remove Logged Activity Request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_options** | [**RequestOptions**](RequestOptions.md) |  | [optional] 
**user_activity** | [**UserActivity**](UserActivity.md) |  | [optional] 

## Example

```python
from openapi_client.models.remove_activity_request import RemoveActivityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveActivityRequest from a JSON string
remove_activity_request_instance = RemoveActivityRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveActivityRequest.to_json())

# convert the object into a dict
remove_activity_request_dict = remove_activity_request_instance.to_dict()
# create an instance of RemoveActivityRequest from a dict
remove_activity_request_from_dict = RemoveActivityRequest.from_dict(remove_activity_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


