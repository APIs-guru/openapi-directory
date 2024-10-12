# DataSubjectRightQueueInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_at** | **datetime** |  | 
**queue_name** | **str** |  | 
**sas_uri** | **str** |  | 

## Example

```python
from openapi_client.models.data_subject_right_queue_info import DataSubjectRightQueueInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DataSubjectRightQueueInfo from a JSON string
data_subject_right_queue_info_instance = DataSubjectRightQueueInfo.from_json(json)
# print the JSON string representation of the object
print(DataSubjectRightQueueInfo.to_json())

# convert the object into a dict
data_subject_right_queue_info_dict = data_subject_right_queue_info_instance.to_dict()
# create an instance of DataSubjectRightQueueInfo from a dict
data_subject_right_queue_info_from_dict = DataSubjectRightQueueInfo.from_dict(data_subject_right_queue_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


