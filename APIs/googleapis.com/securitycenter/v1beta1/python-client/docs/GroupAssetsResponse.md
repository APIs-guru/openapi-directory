# GroupAssetsResponse

Response message for grouping by assets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_by_results** | [**List[GroupResult]**](GroupResult.md) | Group results. There exists an element for each existing unique combination of property/values. The element contains a count for the number of times those specific property/values appear. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results. | [optional] 
**read_time** | **str** | Time used for executing the groupBy request. | [optional] 

## Example

```python
from openapi_client.models.group_assets_response import GroupAssetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GroupAssetsResponse from a JSON string
group_assets_response_instance = GroupAssetsResponse.from_json(json)
# print the JSON string representation of the object
print(GroupAssetsResponse.to_json())

# convert the object into a dict
group_assets_response_dict = group_assets_response_instance.to_dict()
# create an instance of GroupAssetsResponse from a dict
group_assets_response_from_dict = GroupAssetsResponse.from_dict(group_assets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


