# HazardousMaterialDetailsResponse

A type that defines the response fields for the <b>getHazardousMaterialsLabels</b> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pictograms** | [**List[Pictogram]**](Pictogram.md) | This array contains of available hazardous materials hazard pictograms for the specified marketplace. | [optional] 
**signal_words** | [**List[SignalWord]**](SignalWord.md) | This array contains available hazardous materials signal words for the specified marketplace. | [optional] 
**statements** | [**List[HazardStatement]**](HazardStatement.md) | This array contains available hazardous materials hazard statements for the specified marketplace. | [optional] 

## Example

```python
from openapi_client.models.hazardous_material_details_response import HazardousMaterialDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of HazardousMaterialDetailsResponse from a JSON string
hazardous_material_details_response_instance = HazardousMaterialDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(HazardousMaterialDetailsResponse.to_json())

# convert the object into a dict
hazardous_material_details_response_dict = hazardous_material_details_response_instance.to_dict()
# create an instance of HazardousMaterialDetailsResponse from a dict
hazardous_material_details_response_from_dict = HazardousMaterialDetailsResponse.from_dict(hazardous_material_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


