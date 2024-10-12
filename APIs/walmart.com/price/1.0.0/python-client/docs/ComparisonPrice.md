# ComparisonPrice

This is applicable only for promotions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** |  | [optional] 
**currency** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.comparison_price import ComparisonPrice

# TODO update the JSON string below
json = "{}"
# create an instance of ComparisonPrice from a JSON string
comparison_price_instance = ComparisonPrice.from_json(json)
# print the JSON string representation of the object
print(ComparisonPrice.to_json())

# convert the object into a dict
comparison_price_dict = comparison_price_instance.to_dict()
# create an instance of ComparisonPrice from a dict
comparison_price_from_dict = ComparisonPrice.from_dict(comparison_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


