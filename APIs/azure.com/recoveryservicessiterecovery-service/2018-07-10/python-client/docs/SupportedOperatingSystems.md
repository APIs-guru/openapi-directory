# SupportedOperatingSystems

Response object for supported operating systems API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SupportedOSProperties**](SupportedOSProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**type** | **str** | Resource Type | [optional] [readonly] 

## Example

```python
from openapi_client.models.supported_operating_systems import SupportedOperatingSystems

# TODO update the JSON string below
json = "{}"
# create an instance of SupportedOperatingSystems from a JSON string
supported_operating_systems_instance = SupportedOperatingSystems.from_json(json)
# print the JSON string representation of the object
print(SupportedOperatingSystems.to_json())

# convert the object into a dict
supported_operating_systems_dict = supported_operating_systems_instance.to_dict()
# create an instance of SupportedOperatingSystems from a dict
supported_operating_systems_from_dict = SupportedOperatingSystems.from_dict(supported_operating_systems_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


