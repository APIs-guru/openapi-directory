# GoogleCloudMlV1ManualScaling

Options for manually scaling a model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | **int** | The number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed, so the cost of operating this model will be proportional to &#x60;nodes&#x60; * number of hours since last billing cycle plus the cost for each prediction performed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_manual_scaling import GoogleCloudMlV1ManualScaling

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1ManualScaling from a JSON string
google_cloud_ml_v1_manual_scaling_instance = GoogleCloudMlV1ManualScaling.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1ManualScaling.to_json())

# convert the object into a dict
google_cloud_ml_v1_manual_scaling_dict = google_cloud_ml_v1_manual_scaling_instance.to_dict()
# create an instance of GoogleCloudMlV1ManualScaling from a dict
google_cloud_ml_v1_manual_scaling_from_dict = GoogleCloudMlV1ManualScaling.from_dict(google_cloud_ml_v1_manual_scaling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


