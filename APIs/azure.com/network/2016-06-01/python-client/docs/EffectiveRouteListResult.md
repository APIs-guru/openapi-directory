# EffectiveRouteListResult

Response for list effective route api service call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[EffectiveRoute]**](EffectiveRoute.md) | Gets list of effective routes | [optional] 

## Example

```python
from openapi_client.models.effective_route_list_result import EffectiveRouteListResult

# TODO update the JSON string below
json = "{}"
# create an instance of EffectiveRouteListResult from a JSON string
effective_route_list_result_instance = EffectiveRouteListResult.from_json(json)
# print the JSON string representation of the object
print(EffectiveRouteListResult.to_json())

# convert the object into a dict
effective_route_list_result_dict = effective_route_list_result_instance.to_dict()
# create an instance of EffectiveRouteListResult from a dict
effective_route_list_result_from_dict = EffectiveRouteListResult.from_dict(effective_route_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


