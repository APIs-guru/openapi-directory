# ComparisonPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dealer_indicator** | **str** | Deal Indicator | [optional] 
**fair_deal_price** | **float** | Fair Deal Price | [optional] 
**similar_vehicles_count** | **float** | Similar Vehicles Count | [optional] 
**vin_price** | **float** | Price for Vin | [optional] 

## Example

```python
from openapi_client.models.comparison_point import ComparisonPoint

# TODO update the JSON string below
json = "{}"
# create an instance of ComparisonPoint from a JSON string
comparison_point_instance = ComparisonPoint.from_json(json)
# print the JSON string representation of the object
print(ComparisonPoint.to_json())

# convert the object into a dict
comparison_point_dict = comparison_point_instance.to_dict()
# create an instance of ComparisonPoint from a dict
comparison_point_from_dict = ComparisonPoint.from_dict(comparison_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


