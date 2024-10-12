# ReplicationProviderContainerUnmappingInput

Provider specific input for unpairing operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The class type. | [optional] 

## Example

```python
from openapi_client.models.replication_provider_container_unmapping_input import ReplicationProviderContainerUnmappingInput

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationProviderContainerUnmappingInput from a JSON string
replication_provider_container_unmapping_input_instance = ReplicationProviderContainerUnmappingInput.from_json(json)
# print the JSON string representation of the object
print(ReplicationProviderContainerUnmappingInput.to_json())

# convert the object into a dict
replication_provider_container_unmapping_input_dict = replication_provider_container_unmapping_input_instance.to_dict()
# create an instance of ReplicationProviderContainerUnmappingInput from a dict
replication_provider_container_unmapping_input_from_dict = ReplicationProviderContainerUnmappingInput.from_dict(replication_provider_container_unmapping_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


