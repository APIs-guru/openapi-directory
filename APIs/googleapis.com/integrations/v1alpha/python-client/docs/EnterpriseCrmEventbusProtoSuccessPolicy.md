# EnterpriseCrmEventbusProtoSuccessPolicy

Policy that dictates the behavior for the task after it completes successfully.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**final_state** | **str** | State to which the execution snapshot status will be set if the task succeeds. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_success_policy import EnterpriseCrmEventbusProtoSuccessPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoSuccessPolicy from a JSON string
enterprise_crm_eventbus_proto_success_policy_instance = EnterpriseCrmEventbusProtoSuccessPolicy.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoSuccessPolicy.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_success_policy_dict = enterprise_crm_eventbus_proto_success_policy_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoSuccessPolicy from a dict
enterprise_crm_eventbus_proto_success_policy_from_dict = EnterpriseCrmEventbusProtoSuccessPolicy.from_dict(enterprise_crm_eventbus_proto_success_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


