# ServiceResourceUsage

Resource usage for a single Mobile Center service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_usage_period** | [**BillingAggregatedInformationGetByApp200ResponseUsageBuildServiceCurrentUsagePeriod**](BillingAggregatedInformationGetByApp200ResponseUsageBuildServiceCurrentUsagePeriod.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_resource_usage import ServiceResourceUsage

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceResourceUsage from a JSON string
service_resource_usage_instance = ServiceResourceUsage.from_json(json)
# print the JSON string representation of the object
print(ServiceResourceUsage.to_json())

# convert the object into a dict
service_resource_usage_dict = service_resource_usage_instance.to_dict()
# create an instance of ServiceResourceUsage from a dict
service_resource_usage_from_dict = ServiceResourceUsage.from_dict(service_resource_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


