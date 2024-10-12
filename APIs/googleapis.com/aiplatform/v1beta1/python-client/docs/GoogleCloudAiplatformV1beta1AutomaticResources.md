# GoogleCloudAiplatformV1beta1AutomaticResources

A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration. Each Model supporting these resources documents its specific guidelines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_replica_count** | **int** | Immutable. The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, a no upper bound for scaling under heavy traffic will be assume, though Vertex AI may be unable to scale beyond certain replica number. | [optional] 
**min_replica_count** | **int** | Immutable. The minimum number of replicas this DeployedModel will be always deployed on. If traffic against it increases, it may dynamically be deployed onto more replicas up to max_replica_count, and as traffic decreases, some of these extra replicas may be freed. If the requested value is too large, the deployment will error. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_automatic_resources import GoogleCloudAiplatformV1beta1AutomaticResources

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1AutomaticResources from a JSON string
google_cloud_aiplatform_v1beta1_automatic_resources_instance = GoogleCloudAiplatformV1beta1AutomaticResources.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1AutomaticResources.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_automatic_resources_dict = google_cloud_aiplatform_v1beta1_automatic_resources_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1AutomaticResources from a dict
google_cloud_aiplatform_v1beta1_automatic_resources_from_dict = GoogleCloudAiplatformV1beta1AutomaticResources.from_dict(google_cloud_aiplatform_v1beta1_automatic_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


