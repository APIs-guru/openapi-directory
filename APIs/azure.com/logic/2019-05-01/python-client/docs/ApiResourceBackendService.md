# ApiResourceBackendService

The API backend service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_url** | **str** | The service URL. | [optional] 

## Example

```python
from openapi_client.models.api_resource_backend_service import ApiResourceBackendService

# TODO update the JSON string below
json = "{}"
# create an instance of ApiResourceBackendService from a JSON string
api_resource_backend_service_instance = ApiResourceBackendService.from_json(json)
# print the JSON string representation of the object
print(ApiResourceBackendService.to_json())

# convert the object into a dict
api_resource_backend_service_dict = api_resource_backend_service_instance.to_dict()
# create an instance of ApiResourceBackendService from a dict
api_resource_backend_service_from_dict = ApiResourceBackendService.from_dict(api_resource_backend_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


