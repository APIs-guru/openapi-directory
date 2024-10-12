# ServiceTierAdvisorListResult

Represents the response to a list service tier advisor request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ServiceTierAdvisor]**](ServiceTierAdvisor.md) | The list of service tier advisors for specified database. | 

## Example

```python
from openapi_client.models.service_tier_advisor_list_result import ServiceTierAdvisorListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceTierAdvisorListResult from a JSON string
service_tier_advisor_list_result_instance = ServiceTierAdvisorListResult.from_json(json)
# print the JSON string representation of the object
print(ServiceTierAdvisorListResult.to_json())

# convert the object into a dict
service_tier_advisor_list_result_dict = service_tier_advisor_list_result_instance.to_dict()
# create an instance of ServiceTierAdvisorListResult from a dict
service_tier_advisor_list_result_from_dict = ServiceTierAdvisorListResult.from_dict(service_tier_advisor_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


