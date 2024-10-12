# GoogleCloudMlV1Config


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tpu_service_account** | **str** | The service account Cloud ML uses to run on TPU node. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_config import GoogleCloudMlV1Config

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1Config from a JSON string
google_cloud_ml_v1_config_instance = GoogleCloudMlV1Config.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1Config.to_json())

# convert the object into a dict
google_cloud_ml_v1_config_dict = google_cloud_ml_v1_config_instance.to_dict()
# create an instance of GoogleCloudMlV1Config from a dict
google_cloud_ml_v1_config_from_dict = GoogleCloudMlV1Config.from_dict(google_cloud_ml_v1_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


