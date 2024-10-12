# ConnectionMonitorsUpdateTagsRequest

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.connection_monitors_update_tags_request import ConnectionMonitorsUpdateTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorsUpdateTagsRequest from a JSON string
connection_monitors_update_tags_request_instance = ConnectionMonitorsUpdateTagsRequest.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorsUpdateTagsRequest.to_json())

# convert the object into a dict
connection_monitors_update_tags_request_dict = connection_monitors_update_tags_request_instance.to_dict()
# create an instance of ConnectionMonitorsUpdateTagsRequest from a dict
connection_monitors_update_tags_request_from_dict = ConnectionMonitorsUpdateTagsRequest.from_dict(connection_monitors_update_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


