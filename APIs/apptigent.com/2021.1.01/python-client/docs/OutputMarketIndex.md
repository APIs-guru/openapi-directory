# OutputMarketIndex


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adj_close** | **float** | Adjusted close value | [optional] 
**adj_high** | **float** | Adjusted high value | [optional] 
**adj_low** | **float** | Adjusted low value | [optional] 
**adj_open** | **float** | Adjusted open value | [optional] 
**adj_volume** | **float** | Adjusted trading volume | [optional] 
**close** | **float** | Close value | [optional] 
**var_date** | **str** | Date | [optional] 
**exchange** | **str** | Market exchange | [optional] 
**high** | **float** | High value | [optional] 
**low** | **float** | Low value | [optional] 
**open** | **float** | Open value | [optional] 
**symbol** | **str** | Index symbol | [optional] 
**volume** | **float** | Trading volume | [optional] 

## Example

```python
from openapi_client.models.output_market_index import OutputMarketIndex

# TODO update the JSON string below
json = "{}"
# create an instance of OutputMarketIndex from a JSON string
output_market_index_instance = OutputMarketIndex.from_json(json)
# print the JSON string representation of the object
print(OutputMarketIndex.to_json())

# convert the object into a dict
output_market_index_dict = output_market_index_instance.to_dict()
# create an instance of OutputMarketIndex from a dict
output_market_index_from_dict = OutputMarketIndex.from_dict(output_market_index_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


