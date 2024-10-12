# GoogleCloudMlV1AutoScaling

Options for automatically scaling a model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_nodes** | **int** | The maximum number of nodes to scale this model under load. The actual value will depend on resource quota and availability. | [optional] 
**metrics** | [**List[GoogleCloudMlV1MetricSpec]**](GoogleCloudMlV1MetricSpec.md) | MetricSpec contains the specifications to use to calculate the desired nodes count. | [optional] 
**min_nodes** | **int** | Optional. The minimum number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed. Therefore, the cost of operating this model will be at least &#x60;rate&#x60; * &#x60;min_nodes&#x60; * number of hours since last billing cycle, where &#x60;rate&#x60; is the cost per node-hour as documented in the [pricing guide](/ml-engine/docs/pricing), even if no predictions are performed. There is additional cost for each prediction performed. Unlike manual scaling, if the load gets too heavy for the nodes that are up, the service will automatically add nodes to handle the increased load as well as scale back as traffic drops, always maintaining at least &#x60;min_nodes&#x60;. You will be charged for the time in which additional nodes are used. If &#x60;min_nodes&#x60; is not specified and AutoScaling is used with a [legacy (MLS1) machine type](/ml-engine/docs/machine-types-online-prediction), &#x60;min_nodes&#x60; defaults to 0, in which case, when traffic to a model stops (and after a cool-down period), nodes will be shut down and no charges will be incurred until traffic to the model resumes. If &#x60;min_nodes&#x60; is not specified and AutoScaling is used with a [Compute Engine (N1) machine type](/ml-engine/docs/machine-types-online-prediction), &#x60;min_nodes&#x60; defaults to 1. &#x60;min_nodes&#x60; must be at least 1 for use with a Compute Engine machine type. You can set &#x60;min_nodes&#x60; when creating the model version, and you can also update &#x60;min_nodes&#x60; for an existing version: update_body.json: { &#39;autoScaling&#39;: { &#39;minNodes&#39;: 5 } } HTTP request: PATCH https://ml.googleapis.com/v1/{name&#x3D;projects/*/models/*/versions/*}?update_mask&#x3D;autoScaling.minNodes -d @./update_body.json  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_auto_scaling import GoogleCloudMlV1AutoScaling

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1AutoScaling from a JSON string
google_cloud_ml_v1_auto_scaling_instance = GoogleCloudMlV1AutoScaling.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1AutoScaling.to_json())

# convert the object into a dict
google_cloud_ml_v1_auto_scaling_dict = google_cloud_ml_v1_auto_scaling_instance.to_dict()
# create an instance of GoogleCloudMlV1AutoScaling from a dict
google_cloud_ml_v1_auto_scaling_from_dict = GoogleCloudMlV1AutoScaling.from_dict(google_cloud_ml_v1_auto_scaling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


