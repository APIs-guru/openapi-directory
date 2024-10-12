# GoogleCloudChannelV1alpha1Value

Data type and value of a parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | Represents a boolean value. | [optional] 
**double_value** | **float** | Represents a double value. | [optional] 
**int64_value** | **str** | Represents an int64 value. | [optional] 
**proto_value** | **Dict[str, object]** | Represents an &#39;Any&#39; proto value. | [optional] 
**string_value** | **str** | Represents a string value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1alpha1_value import GoogleCloudChannelV1alpha1Value

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1alpha1Value from a JSON string
google_cloud_channel_v1alpha1_value_instance = GoogleCloudChannelV1alpha1Value.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1alpha1Value.to_json())

# convert the object into a dict
google_cloud_channel_v1alpha1_value_dict = google_cloud_channel_v1alpha1_value_instance.to_dict()
# create an instance of GoogleCloudChannelV1alpha1Value from a dict
google_cloud_channel_v1alpha1_value_from_dict = GoogleCloudChannelV1alpha1Value.from_dict(google_cloud_channel_v1alpha1_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


