# Replication

An object that represents a replication for a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ReplicationProperties**](ReplicationProperties.md) |  | [optional] 
**id** | **str** | The resource ID. | [optional] [readonly] 
**location** | **str** | The location of the resource. This cannot be changed after the resource is created. | 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.replication import Replication

# TODO update the JSON string below
json = "{}"
# create an instance of Replication from a JSON string
replication_instance = Replication.from_json(json)
# print the JSON string representation of the object
print(Replication.to_json())

# convert the object into a dict
replication_dict = replication_instance.to_dict()
# create an instance of Replication from a dict
replication_from_dict = Replication.from_dict(replication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


