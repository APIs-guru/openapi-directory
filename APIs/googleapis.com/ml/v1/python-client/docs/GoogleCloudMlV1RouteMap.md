# GoogleCloudMlV1RouteMap

Specifies HTTP paths served by a custom container. AI Platform Prediction sends requests to these paths on the container; the custom container must run an HTTP server that responds to these requests with appropriate responses. Read [Custom container requirements](/ai-platform/prediction/docs/custom-container-requirements) for details on how to create your container image to meet these requirements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health** | **str** | HTTP path on the container to send health checkss to. AI Platform Prediction intermittently sends GET requests to this path on the container&#39;s IP address and port to check that the container is healthy. Read more about [health checks](/ai-platform/prediction/docs/custom-container-requirements#checks). For example, if you set this field to &#x60;/bar&#x60;, then AI Platform Prediction intermittently sends a GET request to the &#x60;/bar&#x60; path on the port of your container specified by the first value of Version.container.ports. If you don&#39;t specify this field, it defaults to the following value: /v1/models/ MODEL/versions/VERSION The placeholders in this value are replaced as follows: * MODEL: The name of the parent Model. This does not include the \&quot;projects/PROJECT_ID/models/\&quot; prefix that the API returns in output; it is the bare model name, as provided to projects.models.create. * VERSION: The name of the model version. This does not include the \&quot;projects/PROJECT_ID /models/MODEL/versions/\&quot; prefix that the API returns in output; it is the bare version name, as provided to projects.models.versions.create. | [optional] 
**predict** | **str** | HTTP path on the container to send prediction requests to. AI Platform Prediction forwards requests sent using projects.predict to this path on the container&#39;s IP address and port. AI Platform Prediction then returns the container&#39;s response in the API response. For example, if you set this field to &#x60;/foo&#x60;, then when AI Platform Prediction receives a prediction request, it forwards the request body in a POST request to the &#x60;/foo&#x60; path on the port of your container specified by the first value of Version.container.ports. If you don&#39;t specify this field, it defaults to the following value: /v1/models/MODEL/versions/VERSION:predict The placeholders in this value are replaced as follows: * MODEL: The name of the parent Model. This does not include the \&quot;projects/PROJECT_ID/models/\&quot; prefix that the API returns in output; it is the bare model name, as provided to projects.models.create. * VERSION: The name of the model version. This does not include the \&quot;projects/PROJECT_ID/models/MODEL/versions/\&quot; prefix that the API returns in output; it is the bare version name, as provided to projects.models.versions.create. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_route_map import GoogleCloudMlV1RouteMap

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1RouteMap from a JSON string
google_cloud_ml_v1_route_map_instance = GoogleCloudMlV1RouteMap.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1RouteMap.to_json())

# convert the object into a dict
google_cloud_ml_v1_route_map_dict = google_cloud_ml_v1_route_map_instance.to_dict()
# create an instance of GoogleCloudMlV1RouteMap from a dict
google_cloud_ml_v1_route_map_from_dict = GoogleCloudMlV1RouteMap.from_dict(google_cloud_ml_v1_route_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


