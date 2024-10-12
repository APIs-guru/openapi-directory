# PeeringRegisteredPrefixProperties

The properties that define a registered prefix.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | The error message associated with the validation state, if any. | [optional] [readonly] 
**peering_service_prefix_key** | **str** | The peering service prefix key that is to be shared with the customer. | [optional] [readonly] 
**prefix** | **str** | The customer&#39;s prefix from which traffic originates. | [optional] 
**prefix_validation_state** | **str** | The prefix validation state. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peering_registered_prefix_properties import PeeringRegisteredPrefixProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringRegisteredPrefixProperties from a JSON string
peering_registered_prefix_properties_instance = PeeringRegisteredPrefixProperties.from_json(json)
# print the JSON string representation of the object
print(PeeringRegisteredPrefixProperties.to_json())

# convert the object into a dict
peering_registered_prefix_properties_dict = peering_registered_prefix_properties_instance.to_dict()
# create an instance of PeeringRegisteredPrefixProperties from a dict
peering_registered_prefix_properties_from_dict = PeeringRegisteredPrefixProperties.from_dict(peering_registered_prefix_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


