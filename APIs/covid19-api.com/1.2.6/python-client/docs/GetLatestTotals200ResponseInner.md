# GetLatestTotals200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmed** | **int** |  | [optional] 
**critical** | **int** |  | [optional] 
**deaths** | **int** |  | [optional] 
**last_change** | **datetime** |  | [optional] 
**last_update** | **datetime** |  | [optional] 
**recovered** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_latest_totals200_response_inner import GetLatestTotals200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetLatestTotals200ResponseInner from a JSON string
get_latest_totals200_response_inner_instance = GetLatestTotals200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetLatestTotals200ResponseInner.to_json())

# convert the object into a dict
get_latest_totals200_response_inner_dict = get_latest_totals200_response_inner_instance.to_dict()
# create an instance of GetLatestTotals200ResponseInner from a dict
get_latest_totals200_response_inner_from_dict = GetLatestTotals200ResponseInner.from_dict(get_latest_totals200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


