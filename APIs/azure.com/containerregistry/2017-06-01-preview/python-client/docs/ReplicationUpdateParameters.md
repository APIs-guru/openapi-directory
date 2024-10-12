# ReplicationUpdateParameters

The parameters for updating a replication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | The tags for the replication. | [optional] 

## Example

```python
from openapi_client.models.replication_update_parameters import ReplicationUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationUpdateParameters from a JSON string
replication_update_parameters_instance = ReplicationUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ReplicationUpdateParameters.to_json())

# convert the object into a dict
replication_update_parameters_dict = replication_update_parameters_instance.to_dict()
# create an instance of ReplicationUpdateParameters from a dict
replication_update_parameters_from_dict = ReplicationUpdateParameters.from_dict(replication_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


