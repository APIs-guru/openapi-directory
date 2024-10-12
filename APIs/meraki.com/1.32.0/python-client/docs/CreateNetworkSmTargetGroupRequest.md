# CreateNetworkSmTargetGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of this target group | [optional] 
**scope** | **str** | The scope and tag options of the target group. Comma separated values beginning with one of withAny, withAll, withoutAny, withoutAll, all, none, followed by tags. Default to none if empty. | [optional] 

## Example

```python
from openapi_client.models.create_network_sm_target_group_request import CreateNetworkSmTargetGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkSmTargetGroupRequest from a JSON string
create_network_sm_target_group_request_instance = CreateNetworkSmTargetGroupRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkSmTargetGroupRequest.to_json())

# convert the object into a dict
create_network_sm_target_group_request_dict = create_network_sm_target_group_request_instance.to_dict()
# create an instance of CreateNetworkSmTargetGroupRequest from a dict
create_network_sm_target_group_request_from_dict = CreateNetworkSmTargetGroupRequest.from_dict(create_network_sm_target_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


