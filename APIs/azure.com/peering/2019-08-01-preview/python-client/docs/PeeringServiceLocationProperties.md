# PeeringServiceLocationProperties

The properties that define connectivity to the Peering Service Location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_region** | **str** | Azure region for the location | [optional] 
**country** | **str** | Country of the customer | [optional] 
**state** | **str** | State of the customer | [optional] 

## Example

```python
from openapi_client.models.peering_service_location_properties import PeeringServiceLocationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringServiceLocationProperties from a JSON string
peering_service_location_properties_instance = PeeringServiceLocationProperties.from_json(json)
# print the JSON string representation of the object
print(PeeringServiceLocationProperties.to_json())

# convert the object into a dict
peering_service_location_properties_dict = peering_service_location_properties_instance.to_dict()
# create an instance of PeeringServiceLocationProperties from a dict
peering_service_location_properties_from_dict = PeeringServiceLocationProperties.from_dict(peering_service_location_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


