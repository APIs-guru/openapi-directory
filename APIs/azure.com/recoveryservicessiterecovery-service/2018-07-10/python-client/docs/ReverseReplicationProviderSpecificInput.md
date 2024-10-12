# ReverseReplicationProviderSpecificInput

Provider specific reverse replication input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The class type. | [optional] 

## Example

```python
from openapi_client.models.reverse_replication_provider_specific_input import ReverseReplicationProviderSpecificInput

# TODO update the JSON string below
json = "{}"
# create an instance of ReverseReplicationProviderSpecificInput from a JSON string
reverse_replication_provider_specific_input_instance = ReverseReplicationProviderSpecificInput.from_json(json)
# print the JSON string representation of the object
print(ReverseReplicationProviderSpecificInput.to_json())

# convert the object into a dict
reverse_replication_provider_specific_input_dict = reverse_replication_provider_specific_input_instance.to_dict()
# create an instance of ReverseReplicationProviderSpecificInput from a dict
reverse_replication_provider_specific_input_from_dict = ReverseReplicationProviderSpecificInput.from_dict(reverse_replication_provider_specific_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


