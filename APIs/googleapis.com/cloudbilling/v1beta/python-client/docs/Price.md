# Price

The price of a SKU at a point int time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_time** | [**EstimationTimePoint**](EstimationTimePoint.md) |  | [optional] 
**price_type** | **str** | The type of price. Possible values: \&quot;RATE\&quot; | [optional] 
**rate** | [**Rate**](Rate.md) |  | [optional] 

## Example

```python
from openapi_client.models.price import Price

# TODO update the JSON string below
json = "{}"
# create an instance of Price from a JSON string
price_instance = Price.from_json(json)
# print the JSON string representation of the object
print(Price.to_json())

# convert the object into a dict
price_dict = price_instance.to_dict()
# create an instance of Price from a dict
price_from_dict = Price.from_dict(price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


