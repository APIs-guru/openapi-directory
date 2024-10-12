# OnCallNowResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**escalation_policy** | [**OnCallEscalationPolicyResource**](OnCallEscalationPolicyResource.md) |  | [optional] 
**users** | [**List[OnCallUsersResource]**](OnCallUsersResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.on_call_now_resource import OnCallNowResource

# TODO update the JSON string below
json = "{}"
# create an instance of OnCallNowResource from a JSON string
on_call_now_resource_instance = OnCallNowResource.from_json(json)
# print the JSON string representation of the object
print(OnCallNowResource.to_json())

# convert the object into a dict
on_call_now_resource_dict = on_call_now_resource_instance.to_dict()
# create an instance of OnCallNowResource from a dict
on_call_now_resource_from_dict = OnCallNowResource.from_dict(on_call_now_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


