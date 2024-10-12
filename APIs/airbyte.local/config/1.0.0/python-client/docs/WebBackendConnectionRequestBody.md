# WebBackendConnectionRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_id** | **str** |  | 
**with_refreshed_catalog** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.web_backend_connection_request_body import WebBackendConnectionRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of WebBackendConnectionRequestBody from a JSON string
web_backend_connection_request_body_instance = WebBackendConnectionRequestBody.from_json(json)
# print the JSON string representation of the object
print(WebBackendConnectionRequestBody.to_json())

# convert the object into a dict
web_backend_connection_request_body_dict = web_backend_connection_request_body_instance.to_dict()
# create an instance of WebBackendConnectionRequestBody from a dict
web_backend_connection_request_body_from_dict = WebBackendConnectionRequestBody.from_dict(web_backend_connection_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


