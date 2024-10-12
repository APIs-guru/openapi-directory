# CloudPoolListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** |  | [optional] 
**value** | [**List[CloudPool]**](CloudPool.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_pool_list_result import CloudPoolListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CloudPoolListResult from a JSON string
cloud_pool_list_result_instance = CloudPoolListResult.from_json(json)
# print the JSON string representation of the object
print(CloudPoolListResult.to_json())

# convert the object into a dict
cloud_pool_list_result_dict = cloud_pool_list_result_instance.to_dict()
# create an instance of CloudPoolListResult from a dict
cloud_pool_list_result_from_dict = CloudPoolListResult.from_dict(cloud_pool_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


