# ReverseReplicationInputProperties

Reverse replication input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover_direction** | **str** | Failover direction. | [optional] 
**provider_specific_details** | [**ReverseReplicationProviderSpecificInput**](ReverseReplicationProviderSpecificInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.reverse_replication_input_properties import ReverseReplicationInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReverseReplicationInputProperties from a JSON string
reverse_replication_input_properties_instance = ReverseReplicationInputProperties.from_json(json)
# print the JSON string representation of the object
print(ReverseReplicationInputProperties.to_json())

# convert the object into a dict
reverse_replication_input_properties_dict = reverse_replication_input_properties_instance.to_dict()
# create an instance of ReverseReplicationInputProperties from a dict
reverse_replication_input_properties_from_dict = ReverseReplicationInputProperties.from_dict(reverse_replication_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


