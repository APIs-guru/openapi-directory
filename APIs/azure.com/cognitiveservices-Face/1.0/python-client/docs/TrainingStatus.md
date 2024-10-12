# TrainingStatus

Training status object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date_time** | **datetime** | A combined UTC date and time string that describes the created time of the person group, large person group or large face list. | 
**last_action_date_time** | **datetime** | A combined UTC date and time string that describes the last modify time of the person group, large person group or large face list, could be null value when the group is not successfully trained. | [optional] 
**last_successful_training_date_time** | **datetime** | A combined UTC date and time string that describes the last successful training time of the person group, large person group or large face list. | [optional] 
**message** | **str** | Show failure message when training failed (omitted when training succeed). | [optional] 
**status** | **str** | Training status: notstarted, running, succeeded, failed. If the training process is waiting to perform, the status is notstarted. If the training is ongoing, the status is running. Status succeed means this person group or large person group is ready for Face - Identify, or this large face list is ready for Face - Find Similar. Status failed is often caused by no person or no persisted face exist in the person group or large person group, or no persisted face exist in the large face list. | 

## Example

```python
from openapi_client.models.training_status import TrainingStatus

# TODO update the JSON string below
json = "{}"
# create an instance of TrainingStatus from a JSON string
training_status_instance = TrainingStatus.from_json(json)
# print the JSON string representation of the object
print(TrainingStatus.to_json())

# convert the object into a dict
training_status_dict = training_status_instance.to_dict()
# create an instance of TrainingStatus from a dict
training_status_from_dict = TrainingStatus.from_dict(training_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


