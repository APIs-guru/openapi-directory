# OtherCalculationFrequency1

Other calculation frequency which is not available in standard code set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The four letter Mnemonic used within an XML file to identify a code | [optional] 
**description** | **str** | Description to describe the purpose of the code | 
**name** | **str** | Long name associated with the code | 

## Example

```python
from openapi_client.models.other_calculation_frequency1 import OtherCalculationFrequency1

# TODO update the JSON string below
json = "{}"
# create an instance of OtherCalculationFrequency1 from a JSON string
other_calculation_frequency1_instance = OtherCalculationFrequency1.from_json(json)
# print the JSON string representation of the object
print(OtherCalculationFrequency1.to_json())

# convert the object into a dict
other_calculation_frequency1_dict = other_calculation_frequency1_instance.to_dict()
# create an instance of OtherCalculationFrequency1 from a dict
other_calculation_frequency1_from_dict = OtherCalculationFrequency1.from_dict(other_calculation_frequency1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


