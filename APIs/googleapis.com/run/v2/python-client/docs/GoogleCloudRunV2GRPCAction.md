# GoogleCloudRunV2GRPCAction

GRPCAction describes an action involving a GRPC port.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **int** | Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort. | [optional] 
**service** | **str** | Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_grpc_action import GoogleCloudRunV2GRPCAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2GRPCAction from a JSON string
google_cloud_run_v2_grpc_action_instance = GoogleCloudRunV2GRPCAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2GRPCAction.to_json())

# convert the object into a dict
google_cloud_run_v2_grpc_action_dict = google_cloud_run_v2_grpc_action_instance.to_dict()
# create an instance of GoogleCloudRunV2GRPCAction from a dict
google_cloud_run_v2_grpc_action_from_dict = GoogleCloudRunV2GRPCAction.from_dict(google_cloud_run_v2_grpc_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


