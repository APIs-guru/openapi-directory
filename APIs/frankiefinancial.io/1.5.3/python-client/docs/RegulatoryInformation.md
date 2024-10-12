# RegulatoryInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**licence_details** | **str** |  | [optional] 
**licence_number** | **str** |  | [optional] 
**licence_verified** | **bool** |  | [optional] 
**regulatory_body** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.regulatory_information import RegulatoryInformation

# TODO update the JSON string below
json = "{}"
# create an instance of RegulatoryInformation from a JSON string
regulatory_information_instance = RegulatoryInformation.from_json(json)
# print the JSON string representation of the object
print(RegulatoryInformation.to_json())

# convert the object into a dict
regulatory_information_dict = regulatory_information_instance.to_dict()
# create an instance of RegulatoryInformation from a dict
regulatory_information_from_dict = RegulatoryInformation.from_dict(regulatory_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


