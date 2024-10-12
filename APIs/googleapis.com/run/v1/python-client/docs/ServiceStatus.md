# ServiceStatus

The current state of the Service. Output only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Addressable**](Addressable.md) |  | [optional] 
**conditions** | [**List[GoogleCloudRunV1Condition]**](GoogleCloudRunV1Condition.md) | Conditions communicate information about ongoing/complete reconciliation processes that bring the &#x60;spec&#x60; inline with the observed state of the world. Service-specific conditions include: * &#x60;ConfigurationsReady&#x60;: &#x60;True&#x60; when the underlying Configuration is ready. * &#x60;RoutesReady&#x60;: &#x60;True&#x60; when the underlying Route is ready. * &#x60;Ready&#x60;: &#x60;True&#x60; when all underlying resources are ready. | [optional] 
**latest_created_revision_name** | **str** | Name of the last revision that was created from this Service&#39;s Configuration. It might not be ready yet, for that use LatestReadyRevisionName. | [optional] 
**latest_ready_revision_name** | **str** | Name of the latest Revision from this Service&#39;s Configuration that has had its &#x60;Ready&#x60; condition become &#x60;True&#x60;. | [optional] 
**observed_generation** | **int** | Returns the generation last seen by the system. Clients polling for completed reconciliation should poll until observedGeneration &#x3D; metadata.generation and the Ready condition&#39;s status is True or False. | [optional] 
**traffic** | [**List[TrafficTarget]**](TrafficTarget.md) | Holds the configured traffic distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that we last observed. | [optional] 
**url** | **str** | URL that will distribute traffic over the provided traffic targets. It generally has the form &#x60;https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app&#x60; | [optional] 

## Example

```python
from openapi_client.models.service_status import ServiceStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceStatus from a JSON string
service_status_instance = ServiceStatus.from_json(json)
# print the JSON string representation of the object
print(ServiceStatus.to_json())

# convert the object into a dict
service_status_dict = service_status_instance.to_dict()
# create an instance of ServiceStatus from a dict
service_status_from_dict = ServiceStatus.from_dict(service_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


