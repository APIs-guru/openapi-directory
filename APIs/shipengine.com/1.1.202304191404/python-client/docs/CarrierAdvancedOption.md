# CarrierAdvancedOption

Advanced options that are specific to the carrier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **str** | Default value of option | [optional] [readonly] 
**description** | **str** | Description of option | [optional] [readonly] 
**name** | **str** | Name of advanced option | [optional] [readonly] 

## Example

```python
from openapi_client.models.carrier_advanced_option import CarrierAdvancedOption

# TODO update the JSON string below
json = "{}"
# create an instance of CarrierAdvancedOption from a JSON string
carrier_advanced_option_instance = CarrierAdvancedOption.from_json(json)
# print the JSON string representation of the object
print(CarrierAdvancedOption.to_json())

# convert the object into a dict
carrier_advanced_option_dict = carrier_advanced_option_instance.to_dict()
# create an instance of CarrierAdvancedOption from a dict
carrier_advanced_option_from_dict = CarrierAdvancedOption.from_dict(carrier_advanced_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


