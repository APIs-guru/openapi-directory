# Getzipcodeinfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area_square_miles** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**code** | **str** |  | [optional] 
**credits** | **str** |  | [optional] 
**elderly_household_percent** | **str** |  | [optional] 
**farmer_household_percent** | **str** |  | [optional] 
**income_percent100k** | **str** |  | [optional] 
**income_percent200k** | **str** |  | [optional] 
**income_percent50k** | **str** |  | [optional] 
**latitude** | **str** |  | [optional] 
**longitude** | **str** |  | [optional] 
**married_household_percent** | **str** |  | [optional] 
**population** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**zip_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.getzipcodeinfo200_response import Getzipcodeinfo200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Getzipcodeinfo200Response from a JSON string
getzipcodeinfo200_response_instance = Getzipcodeinfo200Response.from_json(json)
# print the JSON string representation of the object
print(Getzipcodeinfo200Response.to_json())

# convert the object into a dict
getzipcodeinfo200_response_dict = getzipcodeinfo200_response_instance.to_dict()
# create an instance of Getzipcodeinfo200Response from a dict
getzipcodeinfo200_response_from_dict = Getzipcodeinfo200Response.from_dict(getzipcodeinfo200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


