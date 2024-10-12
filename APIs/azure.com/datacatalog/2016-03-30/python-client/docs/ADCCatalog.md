# ADCCatalog

Azure Data Catalog.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ADCCatalogProperties**](ADCCatalogProperties.md) |  | [optional] 
**etag** | **str** | Resource etag | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.adc_catalog import ADCCatalog

# TODO update the JSON string below
json = "{}"
# create an instance of ADCCatalog from a JSON string
adc_catalog_instance = ADCCatalog.from_json(json)
# print the JSON string representation of the object
print(ADCCatalog.to_json())

# convert the object into a dict
adc_catalog_dict = adc_catalog_instance.to_dict()
# create an instance of ADCCatalog from a dict
adc_catalog_from_dict = ADCCatalog.from_dict(adc_catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


