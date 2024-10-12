# DealerDBModelsDealer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_address** | **str** |  | [optional] 
**billing_address2** | **str** |  | [optional] 
**billing_address3** | **str** |  | [optional] 
**billing_address4** | **str** |  | [optional] 
**billing_city** | **str** |  | [optional] 
**billing_country** | **str** |  | [optional] 
**billing_country_code** | **str** |  | [optional] 
**billing_state** | **str** |  | [optional] 
**billing_zip** | **str** |  | [optional] 
**brands** | **List[str]** |  | [optional] [readonly] 
**dealer_code** | **str** |  | [optional] 
**dealer_name** | **str** |  | [optional] 
**dealer_status** | **str** |  | [optional] 
**dealer_status_update_date** | **str** |  | [optional] 
**filler** | **str** |  | [optional] 
**is_valid** | **bool** |  | [optional] [readonly] 
**language_preference** | **str** |  | [optional] 
**region1** | **str** |  | [optional] 
**region2** | **str** |  | [optional] 
**region_mapping** | **str** |  | [optional] 
**role_brand** | **str** |  | [optional] 
**shipping_address2** | **str** |  | [optional] 
**shipping_address3** | **str** |  | [optional] 
**shipping_address4** | **str** |  | [optional] 
**shipping_city** | **str** |  | [optional] 
**shipping_country** | **str** |  | [optional] 
**shipping_state** | **str** |  | [optional] 
**shipping_street** | **str** |  | [optional] 
**shipping_zip** | **str** |  | [optional] 
**telephone** | **str** |  | [optional] 
**vat_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.dealer_db_models_dealer import DealerDBModelsDealer

# TODO update the JSON string below
json = "{}"
# create an instance of DealerDBModelsDealer from a JSON string
dealer_db_models_dealer_instance = DealerDBModelsDealer.from_json(json)
# print the JSON string representation of the object
print(DealerDBModelsDealer.to_json())

# convert the object into a dict
dealer_db_models_dealer_dict = dealer_db_models_dealer_instance.to_dict()
# create an instance of DealerDBModelsDealer from a dict
dealer_db_models_dealer_from_dict = DealerDBModelsDealer.from_dict(dealer_db_models_dealer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


