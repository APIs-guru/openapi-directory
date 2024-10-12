# SupportedOSDetails

Supported Operating system details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os_name** | **str** | The name. | [optional] 
**os_type** | **str** | The type. | [optional] 
**os_versions** | [**List[OSVersionWrapper]**](OSVersionWrapper.md) | List of version for OS. | [optional] 

## Example

```python
from openapi_client.models.supported_os_details import SupportedOSDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SupportedOSDetails from a JSON string
supported_os_details_instance = SupportedOSDetails.from_json(json)
# print the JSON string representation of the object
print(SupportedOSDetails.to_json())

# convert the object into a dict
supported_os_details_dict = supported_os_details_instance.to_dict()
# create an instance of SupportedOSDetails from a dict
supported_os_details_from_dict = SupportedOSDetails.from_dict(supported_os_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


