# ServiceLevelAgreement

Service Level Agreement details for a support ticket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_time** | **datetime** | Time in UTC (ISO 8601 format) when service level agreement expires. | [optional] [readonly] 
**sla_minutes** | **int** | Service Level Agreement in minutes | [optional] [readonly] 
**start_time** | **datetime** | Time in UTC (ISO 8601 format) when service level agreement starts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_level_agreement import ServiceLevelAgreement

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceLevelAgreement from a JSON string
service_level_agreement_instance = ServiceLevelAgreement.from_json(json)
# print the JSON string representation of the object
print(ServiceLevelAgreement.to_json())

# convert the object into a dict
service_level_agreement_dict = service_level_agreement_instance.to_dict()
# create an instance of ServiceLevelAgreement from a dict
service_level_agreement_from_dict = ServiceLevelAgreement.from_dict(service_level_agreement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


