# Destination

Represents a target of an invocation over HTTP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_function** | **str** | The Cloud Function resource name. Cloud Functions V1 and V2 are supported. Format: &#x60;projects/{project}/locations/{location}/functions/{function}&#x60; This is a read-only field. Creating Cloud Functions V1/V2 triggers is only supported via the Cloud Functions product. An error will be returned if the user sets this value. | [optional] 
**cloud_run** | [**CloudRun**](CloudRun.md) |  | [optional] 
**gke** | [**GKE**](GKE.md) |  | [optional] 
**http_endpoint** | [**HttpEndpoint**](HttpEndpoint.md) |  | [optional] 
**network_config** | [**NetworkConfig**](NetworkConfig.md) |  | [optional] 
**workflow** | **str** | The resource name of the Workflow whose Executions are triggered by the events. The Workflow resource should be deployed in the same project as the trigger. Format: &#x60;projects/{project}/locations/{location}/workflows/{workflow}&#x60; | [optional] 

## Example

```python
from openapi_client.models.destination import Destination

# TODO update the JSON string below
json = "{}"
# create an instance of Destination from a JSON string
destination_instance = Destination.from_json(json)
# print the JSON string representation of the object
print(Destination.to_json())

# convert the object into a dict
destination_dict = destination_instance.to_dict()
# create an instance of Destination from a dict
destination_from_dict = Destination.from_dict(destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


