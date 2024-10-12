# ServiceTierAdvisor

Represents a Service Tier Advisor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServiceTierAdvisorProperties**](ServiceTierAdvisorProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_tier_advisor import ServiceTierAdvisor

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceTierAdvisor from a JSON string
service_tier_advisor_instance = ServiceTierAdvisor.from_json(json)
# print the JSON string representation of the object
print(ServiceTierAdvisor.to_json())

# convert the object into a dict
service_tier_advisor_dict = service_tier_advisor_instance.to_dict()
# create an instance of ServiceTierAdvisor from a dict
service_tier_advisor_from_dict = ServiceTierAdvisor.from_dict(service_tier_advisor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


