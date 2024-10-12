# DataSubjectRightOperation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | Application identifier if applicable | [optional] 
**context** | **str** | JSON object decribing what to delete (TODO - make separate definition?) | 
**operation_id** | **str** | Unique operation identifier | 
**participant** | **str** | Participant to execute the response | 
**participant_data** | **str** | String field to be used by participant for any intermediate statuses or data they need to save | [optional] 
**request_id** | **str** | Unique request identifier | 
**request_type** | **str** | Request type | 
**status** | **str** | Operation status | 

## Example

```python
from openapi_client.models.data_subject_right_operation import DataSubjectRightOperation

# TODO update the JSON string below
json = "{}"
# create an instance of DataSubjectRightOperation from a JSON string
data_subject_right_operation_instance = DataSubjectRightOperation.from_json(json)
# print the JSON string representation of the object
print(DataSubjectRightOperation.to_json())

# convert the object into a dict
data_subject_right_operation_dict = data_subject_right_operation_instance.to_dict()
# create an instance of DataSubjectRightOperation from a dict
data_subject_right_operation_from_dict = DataSubjectRightOperation.from_dict(data_subject_right_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


