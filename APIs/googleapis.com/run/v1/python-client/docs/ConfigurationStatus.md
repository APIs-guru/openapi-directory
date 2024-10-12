# ConfigurationStatus

ConfigurationStatus communicates the observed state of the Configuration (from the controller).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[GoogleCloudRunV1Condition]**](GoogleCloudRunV1Condition.md) | Conditions communicate information about ongoing/complete reconciliation processes that bring the \&quot;spec\&quot; inline with the observed state of the world. | [optional] 
**latest_created_revision_name** | **str** | LatestCreatedRevisionName is the last revision that was created from this Configuration. It might not be ready yet, so for the latest ready revision, use LatestReadyRevisionName. | [optional] 
**latest_ready_revision_name** | **str** | LatestReadyRevisionName holds the name of the latest Revision stamped out from this Configuration that has had its \&quot;Ready\&quot; condition become \&quot;True\&quot;. | [optional] 
**observed_generation** | **int** | ObservedGeneration is the &#39;Generation&#39; of the Configuration that was last processed by the controller. The observed generation is updated even if the controller failed to process the spec and create the Revision. Clients polling for completed reconciliation should poll until observedGeneration &#x3D; metadata.generation, and the Ready condition&#39;s status is True or False. | [optional] 

## Example

```python
from openapi_client.models.configuration_status import ConfigurationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationStatus from a JSON string
configuration_status_instance = ConfigurationStatus.from_json(json)
# print the JSON string representation of the object
print(ConfigurationStatus.to_json())

# convert the object into a dict
configuration_status_dict = configuration_status_instance.to_dict()
# create an instance of ConfigurationStatus from a dict
configuration_status_from_dict = ConfigurationStatus.from_dict(configuration_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


