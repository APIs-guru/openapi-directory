# PublishHistoryRead



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added** | **int** |  | [optional] 
**author** | [**UserRead**](UserRead.md) |  | [optional] 
**created_at** | **datetime** |  | [optional] [readonly] 
**deleted** | **int** |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**summary** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**updated** | **int** |  | [optional] 
**version** | [**RuleSetVersionRead**](RuleSetVersionRead.md) |  | [optional] 

## Example

```python
from openapi_client.models.publish_history_read import PublishHistoryRead

# TODO update the JSON string below
json = "{}"
# create an instance of PublishHistoryRead from a JSON string
publish_history_read_instance = PublishHistoryRead.from_json(json)
# print the JSON string representation of the object
print(PublishHistoryRead.to_json())

# convert the object into a dict
publish_history_read_dict = publish_history_read_instance.to_dict()
# create an instance of PublishHistoryRead from a dict
publish_history_read_from_dict = PublishHistoryRead.from_dict(publish_history_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


