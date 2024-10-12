# DeleteRangeInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **datetime** |  | [optional] 
**to** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.delete_range_info import DeleteRangeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteRangeInfo from a JSON string
delete_range_info_instance = DeleteRangeInfo.from_json(json)
# print the JSON string representation of the object
print(DeleteRangeInfo.to_json())

# convert the object into a dict
delete_range_info_dict = delete_range_info_instance.to_dict()
# create an instance of DeleteRangeInfo from a dict
delete_range_info_from_dict = DeleteRangeInfo.from_dict(delete_range_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


