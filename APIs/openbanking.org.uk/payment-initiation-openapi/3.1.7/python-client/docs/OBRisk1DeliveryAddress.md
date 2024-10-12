# OBRisk1DeliveryAddress

Information that locates and identifies a specific address, as defined by postal services or in free format text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line** | **List[str]** |  | [optional] 
**building_number** | **str** | Number that identifies the position of a building on a street. | [optional] 
**country** | **str** | Nation with its own government, occupying a particular territory. | 
**country_sub_division** | **str** | Identifies a subdivision of a country such as state, region, county. | [optional] 
**post_code** | **str** | Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail. | [optional] 
**street_name** | **str** | Name of a street or thoroughfare. | [optional] 
**town_name** | **str** | Name of a built-up area, with defined boundaries, and a local government. | 

## Example

```python
from openapi_client.models.ob_risk1_delivery_address import OBRisk1DeliveryAddress

# TODO update the JSON string below
json = "{}"
# create an instance of OBRisk1DeliveryAddress from a JSON string
ob_risk1_delivery_address_instance = OBRisk1DeliveryAddress.from_json(json)
# print the JSON string representation of the object
print(OBRisk1DeliveryAddress.to_json())

# convert the object into a dict
ob_risk1_delivery_address_dict = ob_risk1_delivery_address_instance.to_dict()
# create an instance of OBRisk1DeliveryAddress from a dict
ob_risk1_delivery_address_from_dict = OBRisk1DeliveryAddress.from_dict(ob_risk1_delivery_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


