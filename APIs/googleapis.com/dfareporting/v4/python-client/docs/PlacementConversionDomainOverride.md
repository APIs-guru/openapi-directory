# PlacementConversionDomainOverride


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversion_domains** | [**List[PlacementSingleConversionDomain]**](PlacementSingleConversionDomain.md) |  | [optional] 

## Example

```python
from openapi_client.models.placement_conversion_domain_override import PlacementConversionDomainOverride

# TODO update the JSON string below
json = "{}"
# create an instance of PlacementConversionDomainOverride from a JSON string
placement_conversion_domain_override_instance = PlacementConversionDomainOverride.from_json(json)
# print the JSON string representation of the object
print(PlacementConversionDomainOverride.to_json())

# convert the object into a dict
placement_conversion_domain_override_dict = placement_conversion_domain_override_instance.to_dict()
# create an instance of PlacementConversionDomainOverride from a dict
placement_conversion_domain_override_from_dict = PlacementConversionDomainOverride.from_dict(placement_conversion_domain_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


