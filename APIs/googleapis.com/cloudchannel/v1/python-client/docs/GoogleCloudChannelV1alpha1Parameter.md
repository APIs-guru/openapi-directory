# GoogleCloudChannelV1alpha1Parameter

Definition for extended entitlement parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editable** | **bool** | Output only. Specifies whether this parameter is allowed to be changed. For example, for a Google Workspace Business Starter entitlement in commitment plan, num_units is editable when entitlement is active. | [optional] [readonly] 
**name** | **str** | Name of the parameter. | [optional] 
**value** | [**GoogleCloudChannelV1alpha1Value**](GoogleCloudChannelV1alpha1Value.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1alpha1_parameter import GoogleCloudChannelV1alpha1Parameter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1alpha1Parameter from a JSON string
google_cloud_channel_v1alpha1_parameter_instance = GoogleCloudChannelV1alpha1Parameter.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1alpha1Parameter.to_json())

# convert the object into a dict
google_cloud_channel_v1alpha1_parameter_dict = google_cloud_channel_v1alpha1_parameter_instance.to_dict()
# create an instance of GoogleCloudChannelV1alpha1Parameter from a dict
google_cloud_channel_v1alpha1_parameter_from_dict = GoogleCloudChannelV1alpha1Parameter.from_dict(google_cloud_channel_v1alpha1_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


