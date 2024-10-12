# GoogleCloudMlV1Capability


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_accelerators** | **List[str]** | Available accelerators for the capability. | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_capability import GoogleCloudMlV1Capability

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1Capability from a JSON string
google_cloud_ml_v1_capability_instance = GoogleCloudMlV1Capability.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1Capability.to_json())

# convert the object into a dict
google_cloud_ml_v1_capability_dict = google_cloud_ml_v1_capability_instance.to_dict()
# create an instance of GoogleCloudMlV1Capability from a dict
google_cloud_ml_v1_capability_from_dict = GoogleCloudMlV1Capability.from_dict(google_cloud_ml_v1_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


