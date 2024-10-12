# PeeringServiceCountry

The peering service country.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peering_service_country import PeeringServiceCountry

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringServiceCountry from a JSON string
peering_service_country_instance = PeeringServiceCountry.from_json(json)
# print the JSON string representation of the object
print(PeeringServiceCountry.to_json())

# convert the object into a dict
peering_service_country_dict = peering_service_country_instance.to_dict()
# create an instance of PeeringServiceCountry from a dict
peering_service_country_from_dict = PeeringServiceCountry.from_dict(peering_service_country_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


