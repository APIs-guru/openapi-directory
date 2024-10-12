# InputConfig

The desired input location and metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **bytearray** | File content, represented as a stream of bytes. Note: As with all &#x60;bytes&#x60; fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests. | [optional] 
**gcs_source** | [**GcsSource**](GcsSource.md) |  | [optional] 
**mime_type** | **str** | The type of the file. Currently only \&quot;application/pdf\&quot;, \&quot;image/tiff\&quot; and \&quot;image/gif\&quot; are supported. Wildcards are not supported. | [optional] 

## Example

```python
from openapi_client.models.input_config import InputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of InputConfig from a JSON string
input_config_instance = InputConfig.from_json(json)
# print the JSON string representation of the object
print(InputConfig.to_json())

# convert the object into a dict
input_config_dict = input_config_instance.to_dict()
# create an instance of InputConfig from a dict
input_config_from_dict = InputConfig.from_dict(input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


