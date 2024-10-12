# OtherApplicationFrequency

Other application frequencies that are not available in the standard code list

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The four letter Mnemonic used within an XML file to identify a code | [optional] 
**description** | **str** | Description to describe the purpose of the code | 
**name** | **str** | Long name associated with the code | 

## Example

```python
from openapi_client.models.other_application_frequency import OtherApplicationFrequency

# TODO update the JSON string below
json = "{}"
# create an instance of OtherApplicationFrequency from a JSON string
other_application_frequency_instance = OtherApplicationFrequency.from_json(json)
# print the JSON string representation of the object
print(OtherApplicationFrequency.to_json())

# convert the object into a dict
other_application_frequency_dict = other_application_frequency_instance.to_dict()
# create an instance of OtherApplicationFrequency from a dict
other_application_frequency_from_dict = OtherApplicationFrequency.from_dict(other_application_frequency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


