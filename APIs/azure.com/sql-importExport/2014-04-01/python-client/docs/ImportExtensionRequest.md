# ImportExtensionRequest

Import database parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the extension. | [optional] 
**properties** | [**ImportExtensionProperties**](ImportExtensionProperties.md) |  | [optional] 
**type** | **str** | The type of the extension. | [optional] 

## Example

```python
from openapi_client.models.import_extension_request import ImportExtensionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportExtensionRequest from a JSON string
import_extension_request_instance = ImportExtensionRequest.from_json(json)
# print the JSON string representation of the object
print(ImportExtensionRequest.to_json())

# convert the object into a dict
import_extension_request_dict = import_extension_request_instance.to_dict()
# create an instance of ImportExtensionRequest from a dict
import_extension_request_from_dict = ImportExtensionRequest.from_dict(import_extension_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


