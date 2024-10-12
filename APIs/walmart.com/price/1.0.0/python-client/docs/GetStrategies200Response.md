# GetStrategies200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strategy_collections** | [**List[GetStrategies200ResponseStrategyCollectionsInner]**](GetStrategies200ResponseStrategyCollectionsInner.md) |  | [optional] 
**total_elements** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_strategies200_response import GetStrategies200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetStrategies200Response from a JSON string
get_strategies200_response_instance = GetStrategies200Response.from_json(json)
# print the JSON string representation of the object
print(GetStrategies200Response.to_json())

# convert the object into a dict
get_strategies200_response_dict = get_strategies200_response_instance.to_dict()
# create an instance of GetStrategies200Response from a dict
get_strategies200_response_from_dict = GetStrategies200Response.from_dict(get_strategies200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


