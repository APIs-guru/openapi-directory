# GoogleCloudServicebrokerV1alpha1Operation

Describes a long running operation, which conforms to OpenService API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional description of the Operation state. | [optional] 
**state** | **str** | The state of the operation. Valid values are: \&quot;in progress\&quot;, \&quot;succeeded\&quot;, and \&quot;failed\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_servicebroker_v1alpha1_operation import GoogleCloudServicebrokerV1alpha1Operation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudServicebrokerV1alpha1Operation from a JSON string
google_cloud_servicebroker_v1alpha1_operation_instance = GoogleCloudServicebrokerV1alpha1Operation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudServicebrokerV1alpha1Operation.to_json())

# convert the object into a dict
google_cloud_servicebroker_v1alpha1_operation_dict = google_cloud_servicebroker_v1alpha1_operation_instance.to_dict()
# create an instance of GoogleCloudServicebrokerV1alpha1Operation from a dict
google_cloud_servicebroker_v1alpha1_operation_from_dict = GoogleCloudServicebrokerV1alpha1Operation.from_dict(google_cloud_servicebroker_v1alpha1_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


