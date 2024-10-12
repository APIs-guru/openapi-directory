# ADCCatalogProperties

Properties of the data catalog.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admins** | [**List[Principals]**](Principals.md) | Azure data catalog admin list. | [optional] 
**enable_automatic_unit_adjustment** | **bool** | Automatic unit adjustment enabled or not. | [optional] 
**sku** | **str** | Azure data catalog SKU. | [optional] 
**successfully_provisioned** | **bool** | Azure data catalog provision status. | [optional] 
**units** | **int** | Azure data catalog units. | [optional] 
**users** | [**List[Principals]**](Principals.md) | Azure data catalog user list. | [optional] 

## Example

```python
from openapi_client.models.adc_catalog_properties import ADCCatalogProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ADCCatalogProperties from a JSON string
adc_catalog_properties_instance = ADCCatalogProperties.from_json(json)
# print the JSON string representation of the object
print(ADCCatalogProperties.to_json())

# convert the object into a dict
adc_catalog_properties_dict = adc_catalog_properties_instance.to_dict()
# create an instance of ADCCatalogProperties from a dict
adc_catalog_properties_from_dict = ADCCatalogProperties.from_dict(adc_catalog_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


