# InstancesDemoteMasterRequest

Database demote primary instance request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**demote_master_context** | [**DemoteMasterContext**](DemoteMasterContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.instances_demote_master_request import InstancesDemoteMasterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesDemoteMasterRequest from a JSON string
instances_demote_master_request_instance = InstancesDemoteMasterRequest.from_json(json)
# print the JSON string representation of the object
print(InstancesDemoteMasterRequest.to_json())

# convert the object into a dict
instances_demote_master_request_dict = instances_demote_master_request_instance.to_dict()
# create an instance of InstancesDemoteMasterRequest from a dict
instances_demote_master_request_from_dict = InstancesDemoteMasterRequest.from_dict(instances_demote_master_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


