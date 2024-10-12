# DomainMappingStatus

The current state of the Domain Mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[GoogleCloudRunV1Condition]**](GoogleCloudRunV1Condition.md) | Array of observed DomainMappingConditions, indicating the current state of the DomainMapping. | [optional] 
**mapped_route_name** | **str** | The name of the route that the mapping currently points to. | [optional] 
**observed_generation** | **int** | ObservedGeneration is the &#39;Generation&#39; of the DomainMapping that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration &#x3D; metadata.generation and the Ready condition&#39;s status is True or False. | [optional] 
**resource_records** | [**List[ResourceRecord]**](ResourceRecord.md) | The resource records required to configure this domain mapping. These records must be added to the domain&#39;s DNS configuration in order to serve the application via this domain mapping. | [optional] 
**url** | **str** | Optional. Not supported by Cloud Run. | [optional] 

## Example

```python
from openapi_client.models.domain_mapping_status import DomainMappingStatus

# TODO update the JSON string below
json = "{}"
# create an instance of DomainMappingStatus from a JSON string
domain_mapping_status_instance = DomainMappingStatus.from_json(json)
# print the JSON string representation of the object
print(DomainMappingStatus.to_json())

# convert the object into a dict
domain_mapping_status_dict = domain_mapping_status_instance.to_dict()
# create an instance of DomainMappingStatus from a dict
domain_mapping_status_from_dict = DomainMappingStatus.from_dict(domain_mapping_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


