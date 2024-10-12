# ErrorAPIKeyNotFound

This API key was not recognised

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | More detail regarding this error, including the API key supplied | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Description of the error | 
**type** | **str** | URL for further information | 

## Example

```python
from openapi_client.models.error_api_key_not_found import ErrorAPIKeyNotFound

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorAPIKeyNotFound from a JSON string
error_api_key_not_found_instance = ErrorAPIKeyNotFound.from_json(json)
# print the JSON string representation of the object
print(ErrorAPIKeyNotFound.to_json())

# convert the object into a dict
error_api_key_not_found_dict = error_api_key_not_found_instance.to_dict()
# create an instance of ErrorAPIKeyNotFound from a dict
error_api_key_not_found_from_dict = ErrorAPIKeyNotFound.from_dict(error_api_key_not_found_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


