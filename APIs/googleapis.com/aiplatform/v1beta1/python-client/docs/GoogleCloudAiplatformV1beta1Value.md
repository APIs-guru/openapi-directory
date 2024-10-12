# GoogleCloudAiplatformV1beta1Value

Value is the value of the field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**double_value** | **float** | A double value. | [optional] 
**int_value** | **str** | An integer value. | [optional] 
**string_value** | **str** | A string value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_value import GoogleCloudAiplatformV1beta1Value

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1Value from a JSON string
google_cloud_aiplatform_v1beta1_value_instance = GoogleCloudAiplatformV1beta1Value.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1Value.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_value_dict = google_cloud_aiplatform_v1beta1_value_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1Value from a dict
google_cloud_aiplatform_v1beta1_value_from_dict = GoogleCloudAiplatformV1beta1Value.from_dict(google_cloud_aiplatform_v1beta1_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


