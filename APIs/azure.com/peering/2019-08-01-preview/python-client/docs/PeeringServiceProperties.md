# PeeringServiceProperties

The properties that define connectivity to the Peering Service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**peering_service_location** | **str** | The PeeringServiceLocation of the Customer. | [optional] 
**peering_service_provider** | **str** | The MAPS Provider Name. | [optional] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peering_service_properties import PeeringServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringServiceProperties from a JSON string
peering_service_properties_instance = PeeringServiceProperties.from_json(json)
# print the JSON string representation of the object
print(PeeringServiceProperties.to_json())

# convert the object into a dict
peering_service_properties_dict = peering_service_properties_instance.to_dict()
# create an instance of PeeringServiceProperties from a dict
peering_service_properties_from_dict = PeeringServiceProperties.from_dict(peering_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


