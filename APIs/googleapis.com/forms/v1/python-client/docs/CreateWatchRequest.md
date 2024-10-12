# CreateWatchRequest

Create a new watch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**watch** | [**Watch**](Watch.md) |  | [optional] 
**watch_id** | **str** | The ID to use for the watch. If specified, the ID must not already be in use. If not specified, an ID is generated. This value should be 4-63 characters, and valid characters are /a-z-/. | [optional] 

## Example

```python
from openapi_client.models.create_watch_request import CreateWatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWatchRequest from a JSON string
create_watch_request_instance = CreateWatchRequest.from_json(json)
# print the JSON string representation of the object
print(CreateWatchRequest.to_json())

# convert the object into a dict
create_watch_request_dict = create_watch_request_instance.to_dict()
# create an instance of CreateWatchRequest from a dict
create_watch_request_from_dict = CreateWatchRequest.from_dict(create_watch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


