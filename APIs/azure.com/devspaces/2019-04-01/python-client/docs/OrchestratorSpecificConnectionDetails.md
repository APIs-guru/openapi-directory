# OrchestratorSpecificConnectionDetails

Base class for types that supply values used to connect to container orchestrators

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | Gets the Instance type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.orchestrator_specific_connection_details import OrchestratorSpecificConnectionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OrchestratorSpecificConnectionDetails from a JSON string
orchestrator_specific_connection_details_instance = OrchestratorSpecificConnectionDetails.from_json(json)
# print the JSON string representation of the object
print(OrchestratorSpecificConnectionDetails.to_json())

# convert the object into a dict
orchestrator_specific_connection_details_dict = orchestrator_specific_connection_details_instance.to_dict()
# create an instance of OrchestratorSpecificConnectionDetails from a dict
orchestrator_specific_connection_details_from_dict = OrchestratorSpecificConnectionDetails.from_dict(orchestrator_specific_connection_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


