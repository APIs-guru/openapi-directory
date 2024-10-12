# ReplicationProperties

The properties of a replication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state of the replication at the time the operation was called. | [optional] [readonly] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.replication_properties import ReplicationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationProperties from a JSON string
replication_properties_instance = ReplicationProperties.from_json(json)
# print the JSON string representation of the object
print(ReplicationProperties.to_json())

# convert the object into a dict
replication_properties_dict = replication_properties_instance.to_dict()
# create an instance of ReplicationProperties from a dict
replication_properties_from_dict = ReplicationProperties.from_dict(replication_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


