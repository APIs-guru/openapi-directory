# ApiEndpointHandler

Uses Google Cloud Endpoints to handle requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**script_path** | **str** | Path to the script from the application root directory. | [optional] 

## Example

```python
from openapi_client.models.api_endpoint_handler import ApiEndpointHandler

# TODO update the JSON string below
json = "{}"
# create an instance of ApiEndpointHandler from a JSON string
api_endpoint_handler_instance = ApiEndpointHandler.from_json(json)
# print the JSON string representation of the object
print(ApiEndpointHandler.to_json())

# convert the object into a dict
api_endpoint_handler_dict = api_endpoint_handler_instance.to_dict()
# create an instance of ApiEndpointHandler from a dict
api_endpoint_handler_from_dict = ApiEndpointHandler.from_dict(api_endpoint_handler_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


