# NestDealer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City of the dealer | [optional] 
**country** | **str** | country of the dealer | [optional] 
**county** | **str** | county of the dealer | [optional] 
**dealer_type** | **str** | Type of dealer (franchise/independent) | [optional] 
**dealership_group_name** | **str** | dealership_group_name of dealer | [optional] 
**id** | **int** | The unique id associated with the dealer in the Marketcheck database | [optional] 
**latitude** | **str** | Latutide for the dealer location | [optional] 
**longitude** | **str** | Longitude for the dealer location | [optional] 
**msa_code** | **str** | msa_code of the dealer | [optional] 
**name** | **str** | Name of the dealer | [optional] 
**phone** | **str** | Contact no of the dealer | [optional] 
**seller_email** | **str** | Contact email of the dealer | [optional] 
**state** | **str** | State of the dealer | [optional] 
**street** | **str** | Street of the dealer | [optional] 
**website** | **str** | Website of the dealer | [optional] 
**zip** | **str** | Zip of the dealer | [optional] 

## Example

```python
from openapi_client.models.nest_dealer import NestDealer

# TODO update the JSON string below
json = "{}"
# create an instance of NestDealer from a JSON string
nest_dealer_instance = NestDealer.from_json(json)
# print the JSON string representation of the object
print(NestDealer.to_json())

# convert the object into a dict
nest_dealer_dict = nest_dealer_instance.to_dict()
# create an instance of NestDealer from a dict
nest_dealer_from_dict = NestDealer.from_dict(nest_dealer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


