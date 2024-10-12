# ExposedApi

The Open API configuration for your service (if one)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expose_api** | **bool** | Whether or not the current service expose an API with an Open API descriptor | 
**open_api_descriptor_url** | **str** | The URL of the Open API descriptor | [optional] 

## Example

```python
from openapi_client.models.exposed_api import ExposedApi

# TODO update the JSON string below
json = "{}"
# create an instance of ExposedApi from a JSON string
exposed_api_instance = ExposedApi.from_json(json)
# print the JSON string representation of the object
print(ExposedApi.to_json())

# convert the object into a dict
exposed_api_dict = exposed_api_instance.to_dict()
# create an instance of ExposedApi from a dict
exposed_api_from_dict = ExposedApi.from_dict(exposed_api_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


