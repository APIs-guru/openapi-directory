# HealthProfileResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stats** | [**List[HealthProfileResourceAttributesStatsInner]**](HealthProfileResourceAttributesStatsInner.md) | List of category, answered and total counts for questions in the health profile | [optional] 

## Example

```python
from openapi_client.models.health_profile_resource_attributes import HealthProfileResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProfileResourceAttributes from a JSON string
health_profile_resource_attributes_instance = HealthProfileResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(HealthProfileResourceAttributes.to_json())

# convert the object into a dict
health_profile_resource_attributes_dict = health_profile_resource_attributes_instance.to_dict()
# create an instance of HealthProfileResourceAttributes from a dict
health_profile_resource_attributes_from_dict = HealthProfileResourceAttributes.from_dict(health_profile_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


