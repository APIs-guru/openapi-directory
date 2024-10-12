# HealthProfileResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**HealthProfileResourceAttributes**](HealthProfileResourceAttributes.md) |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**HealthProfileResourceLinks**](HealthProfileResourceLinks.md) |  | [optional] 
**relationships** | [**HealthProfileResourceRelationships**](HealthProfileResourceRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.health_profile_resource import HealthProfileResource

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProfileResource from a JSON string
health_profile_resource_instance = HealthProfileResource.from_json(json)
# print the JSON string representation of the object
print(HealthProfileResource.to_json())

# convert the object into a dict
health_profile_resource_dict = health_profile_resource_instance.to_dict()
# create an instance of HealthProfileResource from a dict
health_profile_resource_from_dict = HealthProfileResource.from_dict(health_profile_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


