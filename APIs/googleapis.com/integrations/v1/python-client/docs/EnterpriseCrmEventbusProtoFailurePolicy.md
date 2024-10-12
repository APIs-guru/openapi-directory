# EnterpriseCrmEventbusProtoFailurePolicy

Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interval_in_seconds** | **str** | Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_WORKFLOW_WITH_BACKOFF. Defines the initial interval for backoff. | [optional] 
**max_num_retries** | **int** | Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_WORKFLOW_WITH_BACKOFF. Defines the number of times the task will be retried if failed. | [optional] 
**retry_strategy** | **str** | Defines what happens to the task upon failure. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_failure_policy import EnterpriseCrmEventbusProtoFailurePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoFailurePolicy from a JSON string
enterprise_crm_eventbus_proto_failure_policy_instance = EnterpriseCrmEventbusProtoFailurePolicy.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoFailurePolicy.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_failure_policy_dict = enterprise_crm_eventbus_proto_failure_policy_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoFailurePolicy from a dict
enterprise_crm_eventbus_proto_failure_policy_from_dict = EnterpriseCrmEventbusProtoFailurePolicy.from_dict(enterprise_crm_eventbus_proto_failure_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


