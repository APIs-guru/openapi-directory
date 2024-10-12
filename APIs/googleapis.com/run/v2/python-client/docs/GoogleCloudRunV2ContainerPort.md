# GoogleCloudRunV2ContainerPort

ContainerPort represents a network port in a single container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_port** | **int** | Port number the container listens on. This must be a valid TCP port number, 0 &lt; container_port &lt; 65536. | [optional] 
**name** | **str** | If specified, used to specify which protocol to use. Allowed values are \&quot;http1\&quot; and \&quot;h2c\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_container_port import GoogleCloudRunV2ContainerPort

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2ContainerPort from a JSON string
google_cloud_run_v2_container_port_instance = GoogleCloudRunV2ContainerPort.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2ContainerPort.to_json())

# convert the object into a dict
google_cloud_run_v2_container_port_dict = google_cloud_run_v2_container_port_instance.to_dict()
# create an instance of GoogleCloudRunV2ContainerPort from a dict
google_cloud_run_v2_container_port_from_dict = GoogleCloudRunV2ContainerPort.from_dict(google_cloud_run_v2_container_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


