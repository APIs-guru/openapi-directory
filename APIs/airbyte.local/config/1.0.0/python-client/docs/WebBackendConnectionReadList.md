# WebBackendConnectionReadList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connections** | [**List[WebBackendConnectionListItem]**](WebBackendConnectionListItem.md) |  | 

## Example

```python
from openapi_client.models.web_backend_connection_read_list import WebBackendConnectionReadList

# TODO update the JSON string below
json = "{}"
# create an instance of WebBackendConnectionReadList from a JSON string
web_backend_connection_read_list_instance = WebBackendConnectionReadList.from_json(json)
# print the JSON string representation of the object
print(WebBackendConnectionReadList.to_json())

# convert the object into a dict
web_backend_connection_read_list_dict = web_backend_connection_read_list_instance.to_dict()
# create an instance of WebBackendConnectionReadList from a dict
web_backend_connection_read_list_from_dict = WebBackendConnectionReadList.from_dict(web_backend_connection_read_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


