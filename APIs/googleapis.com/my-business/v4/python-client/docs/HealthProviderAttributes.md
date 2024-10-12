# HealthProviderAttributes

The Health provider attributes linked with this location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insurance_networks** | [**List[InsuranceNetwork]**](InsuranceNetwork.md) | Optional. A list of insurance networks accpected by this location. | [optional] 
**name** | **str** | Required. Google identifier for this location in the form: &#x60;accounts/{account_id}/locations/{location_id}/healthProviderAttributes&#x60; | [optional] 

## Example

```python
from openapi_client.models.health_provider_attributes import HealthProviderAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProviderAttributes from a JSON string
health_provider_attributes_instance = HealthProviderAttributes.from_json(json)
# print the JSON string representation of the object
print(HealthProviderAttributes.to_json())

# convert the object into a dict
health_provider_attributes_dict = health_provider_attributes_instance.to_dict()
# create an instance of HealthProviderAttributes from a dict
health_provider_attributes_from_dict = HealthProviderAttributes.from_dict(health_provider_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


