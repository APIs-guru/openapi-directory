# GoogleCloudMlV1ContainerPort

Represents a network port in a single container. This message is a subset of the [Kubernetes ContainerPort v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#containerport-v1-core).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_port** | **int** | Number of the port to expose on the container. This must be a valid port number: 0 &lt; PORT_NUMBER &lt; 65536. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_container_port import GoogleCloudMlV1ContainerPort

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1ContainerPort from a JSON string
google_cloud_ml_v1_container_port_instance = GoogleCloudMlV1ContainerPort.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1ContainerPort.to_json())

# convert the object into a dict
google_cloud_ml_v1_container_port_dict = google_cloud_ml_v1_container_port_instance.to_dict()
# create an instance of GoogleCloudMlV1ContainerPort from a dict
google_cloud_ml_v1_container_port_from_dict = GoogleCloudMlV1ContainerPort.from_dict(google_cloud_ml_v1_container_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


