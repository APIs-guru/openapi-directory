# VirtualTariff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**factor** | **float** | Says how many of the active power is used in this tariff. This is calculated from the last meter values. | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**unit** | **str** |  | [optional] 
**value** | **float** | The Counter Value of this tariff | [optional] 

## Example

```python
from openapi_client.models.virtual_tariff import VirtualTariff

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualTariff from a JSON string
virtual_tariff_instance = VirtualTariff.from_json(json)
# print the JSON string representation of the object
print(VirtualTariff.to_json())

# convert the object into a dict
virtual_tariff_dict = virtual_tariff_instance.to_dict()
# create an instance of VirtualTariff from a dict
virtual_tariff_from_dict = VirtualTariff.from_dict(virtual_tariff_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


