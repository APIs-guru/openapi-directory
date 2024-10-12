# ADCCatalogsListResult

The response from the List Azure Data Catalog operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ADCCatalog]**](ADCCatalog.md) | the list of Azure Data Catalogs. | [optional] 

## Example

```python
from openapi_client.models.adc_catalogs_list_result import ADCCatalogsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ADCCatalogsListResult from a JSON string
adc_catalogs_list_result_instance = ADCCatalogsListResult.from_json(json)
# print the JSON string representation of the object
print(ADCCatalogsListResult.to_json())

# convert the object into a dict
adc_catalogs_list_result_dict = adc_catalogs_list_result_instance.to_dict()
# create an instance of ADCCatalogsListResult from a dict
adc_catalogs_list_result_from_dict = ADCCatalogsListResult.from_dict(adc_catalogs_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


