# DataSubjectRightUpdateStatusOperation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**participant_data** | **str** | String field to be used by participant for any intermediate statuses or data they need to save | [optional] 
**request_id** | **str** | Request identifier of the operation | 
**status** | **str** | Operation status | 

## Example

```python
from openapi_client.models.data_subject_right_update_status_operation import DataSubjectRightUpdateStatusOperation

# TODO update the JSON string below
json = "{}"
# create an instance of DataSubjectRightUpdateStatusOperation from a JSON string
data_subject_right_update_status_operation_instance = DataSubjectRightUpdateStatusOperation.from_json(json)
# print the JSON string representation of the object
print(DataSubjectRightUpdateStatusOperation.to_json())

# convert the object into a dict
data_subject_right_update_status_operation_dict = data_subject_right_update_status_operation_instance.to_dict()
# create an instance of DataSubjectRightUpdateStatusOperation from a dict
data_subject_right_update_status_operation_from_dict = DataSubjectRightUpdateStatusOperation.from_dict(data_subject_right_update_status_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


