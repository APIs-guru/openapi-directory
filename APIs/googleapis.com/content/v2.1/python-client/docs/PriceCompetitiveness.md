# PriceCompetitiveness

Price competitiveness fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceCompetitivenessProductView`. https://support.google.com/merchants/answer/9626903

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benchmark_price_currency_code** | **str** | The price benchmark currency (ISO 4217 code). | [optional] 
**benchmark_price_micros** | **str** | The latest available price benchmark in micros (1 millionth of a standard unit, 1 USD &#x3D; 1000000 micros) for the product&#39;s catalog in the benchmark country. | [optional] 
**country_code** | **str** | The country of the price benchmark (ISO 3166 code). | [optional] 

## Example

```python
from openapi_client.models.price_competitiveness import PriceCompetitiveness

# TODO update the JSON string below
json = "{}"
# create an instance of PriceCompetitiveness from a JSON string
price_competitiveness_instance = PriceCompetitiveness.from_json(json)
# print the JSON string representation of the object
print(PriceCompetitiveness.to_json())

# convert the object into a dict
price_competitiveness_dict = price_competitiveness_instance.to_dict()
# create an instance of PriceCompetitiveness from a dict
price_competitiveness_from_dict = PriceCompetitiveness.from_dict(price_competitiveness_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


