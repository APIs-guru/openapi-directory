# OSVersionWrapper

Wrapper model for OSVersion to include version and service pack info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_pack** | **str** | Service pack. | [optional] 
**version** | **str** | The version. | [optional] 

## Example

```python
from openapi_client.models.os_version_wrapper import OSVersionWrapper

# TODO update the JSON string below
json = "{}"
# create an instance of OSVersionWrapper from a JSON string
os_version_wrapper_instance = OSVersionWrapper.from_json(json)
# print the JSON string representation of the object
print(OSVersionWrapper.to_json())

# convert the object into a dict
os_version_wrapper_dict = os_version_wrapper_instance.to_dict()
# create an instance of OSVersionWrapper from a dict
os_version_wrapper_from_dict = OSVersionWrapper.from_dict(os_version_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


