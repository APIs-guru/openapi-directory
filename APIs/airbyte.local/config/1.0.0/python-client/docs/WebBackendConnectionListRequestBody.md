# WebBackendConnectionListRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_id** | **List[str]** |  | [optional] 
**source_id** | **List[str]** |  | [optional] 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.web_backend_connection_list_request_body import WebBackendConnectionListRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of WebBackendConnectionListRequestBody from a JSON string
web_backend_connection_list_request_body_instance = WebBackendConnectionListRequestBody.from_json(json)
# print the JSON string representation of the object
print(WebBackendConnectionListRequestBody.to_json())

# convert the object into a dict
web_backend_connection_list_request_body_dict = web_backend_connection_list_request_body_instance.to_dict()
# create an instance of WebBackendConnectionListRequestBody from a dict
web_backend_connection_list_request_body_from_dict = WebBackendConnectionListRequestBody.from_dict(web_backend_connection_list_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


