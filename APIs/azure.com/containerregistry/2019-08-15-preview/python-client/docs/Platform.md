# Platform

The platform object describes the platform which the image in the manifest runs on. A full list of valid operating system and architecture values are listed in the Go language documentation for $GOOS and $GOARCH

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | Specifies the CPU architecture, for example amd64 or ppc64le. | [optional] 
**features** | **List[str]** | The optional features field specifies an array of strings, each listing a required CPU feature (for example sse4 or aes | [optional] 
**os** | **str** | The os field specifies the operating system, for example linux or windows. | [optional] 
**os_features** | **List[str]** | The optional os.features field specifies an array of strings, each listing a required OS feature (for example on Windows win32k | [optional] 
**os_version** | **str** | The optional os.version field specifies the operating system version, for example 10.0.10586. | [optional] 
**variant** | **str** | The optional variant field specifies a variant of the CPU, for example armv6l to specify a particular CPU variant of the ARM CPU. | [optional] 

## Example

```python
from openapi_client.models.platform import Platform

# TODO update the JSON string below
json = "{}"
# create an instance of Platform from a JSON string
platform_instance = Platform.from_json(json)
# print the JSON string representation of the object
print(Platform.to_json())

# convert the object into a dict
platform_dict = platform_instance.to_dict()
# create an instance of Platform from a dict
platform_from_dict = Platform.from_dict(platform_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


