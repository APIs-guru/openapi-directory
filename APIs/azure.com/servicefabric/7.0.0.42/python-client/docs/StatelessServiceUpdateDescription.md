# StatelessServiceUpdateDescription

Describes an update for a stateless service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_close_delay_duration_seconds** | **str** | Duration in seconds, to wait before a stateless instance is closed, to allow the active requests to drain gracefully. This would be effective when the instance is closing during the application/cluster upgrade and disabling node. The endpoint exposed on this instance is removed prior to starting the delay, which prevents new connections to this instance. In addition, clients that have subscribed to service endpoint change events(https://docs.microsoft.com/en-us/dotnet/api/system.fabric.fabricclient.servicemanagementclient.registerservicenotificationfilterasync), can do the following upon receiving the endpoint removal notification:     - Stop sending new requests to this instance.     - Close existing connections after in-flight requests have completed.     - Connect to a different instance of the service partition for future requests. | [optional] 
**instance_count** | **int** | The instance count. | [optional] 
**min_instance_count** | **int** | MinInstanceCount is the minimum number of instances that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstanceCount computation -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service. | [optional] [default to 1]
**min_instance_percentage** | **int** | MinInstancePercentage is the minimum percentage of InstanceCount that must be up to meet the EnsureAvailability safety check during operations like upgrade or deactivate node. The actual number that is used is max( MinInstanceCount, ceil( MinInstancePercentage/100.0 * InstanceCount) ). Note, if InstanceCount is set to -1, during MinInstancePercentage computation, -1 is first converted into the number of nodes on which the instances are allowed to be placed according to the placement constraints on the service. | [optional] [default to 0]

## Example

```python
from openapi_client.models.stateless_service_update_description import StatelessServiceUpdateDescription

# TODO update the JSON string below
json = "{}"
# create an instance of StatelessServiceUpdateDescription from a JSON string
stateless_service_update_description_instance = StatelessServiceUpdateDescription.from_json(json)
# print the JSON string representation of the object
print(StatelessServiceUpdateDescription.to_json())

# convert the object into a dict
stateless_service_update_description_dict = stateless_service_update_description_instance.to_dict()
# create an instance of StatelessServiceUpdateDescription from a dict
stateless_service_update_description_from_dict = StatelessServiceUpdateDescription.from_dict(stateless_service_update_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


