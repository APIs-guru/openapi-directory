# ErrorSecretIDNotFound

This secret ID was not recognised

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | More detail regarding this error, including the secret ID supplied | 
**instance** | **str** | Internal Trace ID | 
**title** | **str** | Description of the error | 
**type** | **str** | URL for further information | 

## Example

```python
from openapi_client.models.error_secret_id_not_found import ErrorSecretIDNotFound

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorSecretIDNotFound from a JSON string
error_secret_id_not_found_instance = ErrorSecretIDNotFound.from_json(json)
# print the JSON string representation of the object
print(ErrorSecretIDNotFound.to_json())

# convert the object into a dict
error_secret_id_not_found_dict = error_secret_id_not_found_instance.to_dict()
# create an instance of ErrorSecretIDNotFound from a dict
error_secret_id_not_found_from_dict = ErrorSecretIDNotFound.from_dict(error_secret_id_not_found_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


