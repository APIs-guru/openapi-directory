# GoogleCloudVisionV1p4beta1Celebrity

A Celebrity is a group of Faces with an identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The Celebrity&#39;s description. | [optional] 
**display_name** | **str** | The Celebrity&#39;s display name. | [optional] 
**name** | **str** | The resource name of the preloaded Celebrity. Has the format &#x60;builtin/{mid}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p4beta1_celebrity import GoogleCloudVisionV1p4beta1Celebrity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p4beta1Celebrity from a JSON string
google_cloud_vision_v1p4beta1_celebrity_instance = GoogleCloudVisionV1p4beta1Celebrity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p4beta1Celebrity.to_json())

# convert the object into a dict
google_cloud_vision_v1p4beta1_celebrity_dict = google_cloud_vision_v1p4beta1_celebrity_instance.to_dict()
# create an instance of GoogleCloudVisionV1p4beta1Celebrity from a dict
google_cloud_vision_v1p4beta1_celebrity_from_dict = GoogleCloudVisionV1p4beta1Celebrity.from_dict(google_cloud_vision_v1p4beta1_celebrity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


