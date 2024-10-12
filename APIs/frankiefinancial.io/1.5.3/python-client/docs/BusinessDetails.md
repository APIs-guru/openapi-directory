# BusinessDetails

The details of the company being checked 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abn** | **str** |  | 
**acn** | **str** |  | 
**arbn** | **str** |  | 
**anzsic_code** | **str** |  | 
**asic_company_type** | **str** |  | [optional] 
**business_names** | **List[str]** |  | [optional] 
**date_registered_with_asic** | **date** |  | [optional] 
**entity_id** | **str** | Frankie&#39;s unique identifier for the business.  Uses a non-versioned UUID format  | [optional] 
**giin** | **str** |  | 
**place_of_business** | [**AddressObject**](AddressObject.md) |  | [optional] 
**public_company** | **bool** |  | [optional] 
**registered_name** | **str** |  | 
**registered_office** | [**AddressObject**](AddressObject.md) |  | [optional] 
**regulatory_information** | [**RegulatoryInformation**](RegulatoryInformation.md) |  | [optional] 
**state_registered_with_asic** | **str** |  | [optional] 
**stock_exchange_data** | [**StockExchangeData**](StockExchangeData.md) |  | [optional] 
**trading_names** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.business_details import BusinessDetails

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessDetails from a JSON string
business_details_instance = BusinessDetails.from_json(json)
# print the JSON string representation of the object
print(BusinessDetails.to_json())

# convert the object into a dict
business_details_dict = business_details_instance.to_dict()
# create an instance of BusinessDetails from a dict
business_details_from_dict = BusinessDetails.from_dict(business_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


