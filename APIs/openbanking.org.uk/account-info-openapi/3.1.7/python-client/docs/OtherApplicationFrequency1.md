# OtherApplicationFrequency1

Other application frequencies not covered in the standard code list

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The four letter Mnemonic used within an XML file to identify a code | [optional] 
**description** | **str** | Description to describe the purpose of the code | 
**name** | **str** | Long name associated with the code | 

## Example

```python
from openapi_client.models.other_application_frequency1 import OtherApplicationFrequency1

# TODO update the JSON string below
json = "{}"
# create an instance of OtherApplicationFrequency1 from a JSON string
other_application_frequency1_instance = OtherApplicationFrequency1.from_json(json)
# print the JSON string representation of the object
print(OtherApplicationFrequency1.to_json())

# convert the object into a dict
other_application_frequency1_dict = other_application_frequency1_instance.to_dict()
# create an instance of OtherApplicationFrequency1 from a dict
other_application_frequency1_from_dict = OtherApplicationFrequency1.from_dict(other_application_frequency1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


