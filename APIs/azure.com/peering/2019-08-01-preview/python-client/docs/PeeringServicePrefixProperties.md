# PeeringServicePrefixProperties

The peering service prefix properties class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**learned_type** | **str** | The prefix learned type | [optional] 
**prefix** | **str** | Valid route prefix | [optional] 
**prefix_validation_state** | **str** | The prefix validation state | [optional] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peering_service_prefix_properties import PeeringServicePrefixProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringServicePrefixProperties from a JSON string
peering_service_prefix_properties_instance = PeeringServicePrefixProperties.from_json(json)
# print the JSON string representation of the object
print(PeeringServicePrefixProperties.to_json())

# convert the object into a dict
peering_service_prefix_properties_dict = peering_service_prefix_properties_instance.to_dict()
# create an instance of PeeringServicePrefixProperties from a dict
peering_service_prefix_properties_from_dict = PeeringServicePrefixProperties.from_dict(peering_service_prefix_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


