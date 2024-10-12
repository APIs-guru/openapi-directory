# ReplicationProviderSpecificContainerCreationInput

Provider specific input for container creation operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The class type. | [optional] 

## Example

```python
from openapi_client.models.replication_provider_specific_container_creation_input import ReplicationProviderSpecificContainerCreationInput

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationProviderSpecificContainerCreationInput from a JSON string
replication_provider_specific_container_creation_input_instance = ReplicationProviderSpecificContainerCreationInput.from_json(json)
# print the JSON string representation of the object
print(ReplicationProviderSpecificContainerCreationInput.to_json())

# convert the object into a dict
replication_provider_specific_container_creation_input_dict = replication_provider_specific_container_creation_input_instance.to_dict()
# create an instance of ReplicationProviderSpecificContainerCreationInput from a dict
replication_provider_specific_container_creation_input_from_dict = ReplicationProviderSpecificContainerCreationInput.from_dict(replication_provider_specific_container_creation_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


