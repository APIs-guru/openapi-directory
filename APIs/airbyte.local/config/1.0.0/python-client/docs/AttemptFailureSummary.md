# AttemptFailureSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failures** | [**List[AttemptFailureReason]**](AttemptFailureReason.md) |  | 
**partial_success** | **bool** | True if the number of committed records for this attempt was greater than 0. False if 0 records were committed. If not set, the number of committed records is unknown. | [optional] 

## Example

```python
from openapi_client.models.attempt_failure_summary import AttemptFailureSummary

# TODO update the JSON string below
json = "{}"
# create an instance of AttemptFailureSummary from a JSON string
attempt_failure_summary_instance = AttemptFailureSummary.from_json(json)
# print the JSON string representation of the object
print(AttemptFailureSummary.to_json())

# convert the object into a dict
attempt_failure_summary_dict = attempt_failure_summary_instance.to_dict()
# create an instance of AttemptFailureSummary from a dict
attempt_failure_summary_from_dict = AttemptFailureSummary.from_dict(attempt_failure_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


