# PlacementStrategiesListResponse

Placement Strategy List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#placementStrategiesListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 
**placement_strategies** | [**List[PlacementStrategy]**](PlacementStrategy.md) | Placement strategy collection. | [optional] 

## Example

```python
from openapi_client.models.placement_strategies_list_response import PlacementStrategiesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlacementStrategiesListResponse from a JSON string
placement_strategies_list_response_instance = PlacementStrategiesListResponse.from_json(json)
# print the JSON string representation of the object
print(PlacementStrategiesListResponse.to_json())

# convert the object into a dict
placement_strategies_list_response_dict = placement_strategies_list_response_instance.to_dict()
# create an instance of PlacementStrategiesListResponse from a dict
placement_strategies_list_response_from_dict = PlacementStrategiesListResponse.from_dict(placement_strategies_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


