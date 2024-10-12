# ApiEndpoint

The properties for a Media Services REST API endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | The Media Services REST endpoint. | [optional] 
**major_version** | **str** | The version of Media Services REST API. | [optional] 

## Example

```python
from openapi_client.models.api_endpoint import ApiEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of ApiEndpoint from a JSON string
api_endpoint_instance = ApiEndpoint.from_json(json)
# print the JSON string representation of the object
print(ApiEndpoint.to_json())

# convert the object into a dict
api_endpoint_dict = api_endpoint_instance.to_dict()
# create an instance of ApiEndpoint from a dict
api_endpoint_from_dict = ApiEndpoint.from_dict(api_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


