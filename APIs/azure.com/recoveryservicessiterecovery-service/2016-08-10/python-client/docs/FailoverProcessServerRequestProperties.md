# FailoverProcessServerRequestProperties

The properties of the Failover Process Server request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_name** | **str** | The container identifier. | [optional] 
**source_process_server_id** | **str** | The source process server. | [optional] 
**target_process_server_id** | **str** | The new process server. | [optional] 
**update_type** | **str** | A value for failover type. It can be systemlevel/serverlevel | [optional] 
**vms_to_migrate** | **List[str]** | The VMS to migrate. | [optional] 

## Example

```python
from openapi_client.models.failover_process_server_request_properties import FailoverProcessServerRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverProcessServerRequestProperties from a JSON string
failover_process_server_request_properties_instance = FailoverProcessServerRequestProperties.from_json(json)
# print the JSON string representation of the object
print(FailoverProcessServerRequestProperties.to_json())

# convert the object into a dict
failover_process_server_request_properties_dict = failover_process_server_request_properties_instance.to_dict()
# create an instance of FailoverProcessServerRequestProperties from a dict
failover_process_server_request_properties_from_dict = FailoverProcessServerRequestProperties.from_dict(failover_process_server_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


