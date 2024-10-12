# SupportedOSProperty

Property object for supported OS api.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | Gets the replication provider type. | [optional] [readonly] 
**supported_os** | [**List[SupportedOSDetails]**](SupportedOSDetails.md) | List of supported OS. | [optional] 

## Example

```python
from openapi_client.models.supported_os_property import SupportedOSProperty

# TODO update the JSON string below
json = "{}"
# create an instance of SupportedOSProperty from a JSON string
supported_os_property_instance = SupportedOSProperty.from_json(json)
# print the JSON string representation of the object
print(SupportedOSProperty.to_json())

# convert the object into a dict
supported_os_property_dict = supported_os_property_instance.to_dict()
# create an instance of SupportedOSProperty from a dict
supported_os_property_from_dict = SupportedOSProperty.from_dict(supported_os_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


