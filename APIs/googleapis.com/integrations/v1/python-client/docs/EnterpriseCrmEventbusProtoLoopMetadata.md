# EnterpriseCrmEventbusProtoLoopMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_iteration_count** | **str** | Starting from 1, not 0. | [optional] 
**current_iteration_detail** | **str** | Needs to be set by the loop impl class before each iteration. The abstract loop class will append the request and response to it. Eg. The foreach Loop will clean up and set it as the current iteration element at the start of each loop. The post request and response will be appended to the value once they are available. | [optional] 
**error_msg** | **str** | Add the error message when loops fail. | [optional] 
**failure_location** | **str** | Indicates where in the loop logic did it error out. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_loop_metadata import EnterpriseCrmEventbusProtoLoopMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoLoopMetadata from a JSON string
enterprise_crm_eventbus_proto_loop_metadata_instance = EnterpriseCrmEventbusProtoLoopMetadata.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoLoopMetadata.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_loop_metadata_dict = enterprise_crm_eventbus_proto_loop_metadata_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoLoopMetadata from a dict
enterprise_crm_eventbus_proto_loop_metadata_from_dict = EnterpriseCrmEventbusProtoLoopMetadata.from_dict(enterprise_crm_eventbus_proto_loop_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


