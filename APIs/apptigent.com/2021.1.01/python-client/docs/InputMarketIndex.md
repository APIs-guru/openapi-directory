# InputMarketIndex


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** | Date (yyyy-MM-dd, leave empty for last trading day) | [optional] 
**symbol** | **str** | Market index | 

## Example

```python
from openapi_client.models.input_market_index import InputMarketIndex

# TODO update the JSON string below
json = "{}"
# create an instance of InputMarketIndex from a JSON string
input_market_index_instance = InputMarketIndex.from_json(json)
# print the JSON string representation of the object
print(InputMarketIndex.to_json())

# convert the object into a dict
input_market_index_dict = input_market_index_instance.to_dict()
# create an instance of InputMarketIndex from a dict
input_market_index_from_dict = InputMarketIndex.from_dict(input_market_index_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


