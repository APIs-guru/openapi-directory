# UnplannedFailoverInputProperties

Input definition for planned failover input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover_direction** | **str** | Failover direction. | [optional] 
**provider_specific_details** | [**ProviderSpecificFailoverInput**](ProviderSpecificFailoverInput.md) |  | [optional] 
**source_site_operations** | **str** | Source site operations status | [optional] 

## Example

```python
from openapi_client.models.unplanned_failover_input_properties import UnplannedFailoverInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UnplannedFailoverInputProperties from a JSON string
unplanned_failover_input_properties_instance = UnplannedFailoverInputProperties.from_json(json)
# print the JSON string representation of the object
print(UnplannedFailoverInputProperties.to_json())

# convert the object into a dict
unplanned_failover_input_properties_dict = unplanned_failover_input_properties_instance.to_dict()
# create an instance of UnplannedFailoverInputProperties from a dict
unplanned_failover_input_properties_from_dict = UnplannedFailoverInputProperties.from_dict(unplanned_failover_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


