# RegionListResult

Lists Regions operation response details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[RegionContract]**](RegionContract.md) | Lists of Regions. | [optional] 

## Example

```python
from openapi_client.models.region_list_result import RegionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RegionListResult from a JSON string
region_list_result_instance = RegionListResult.from_json(json)
# print the JSON string representation of the object
print(RegionListResult.to_json())

# convert the object into a dict
region_list_result_dict = region_list_result_instance.to_dict()
# create an instance of RegionListResult from a dict
region_list_result_from_dict = RegionListResult.from_dict(region_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


