# CloudFunctionV2Target

A Synthetic Monitor deployed to a Cloud Functions V2 instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_run_revision** | [**MonitoredResource**](MonitoredResource.md) |  | [optional] 
**name** | **str** | Required. Fully qualified GCFv2 resource name i.e. projects/{project}/locations/{location}/functions/{function} Required. | [optional] 

## Example

```python
from openapi_client.models.cloud_function_v2_target import CloudFunctionV2Target

# TODO update the JSON string below
json = "{}"
# create an instance of CloudFunctionV2Target from a JSON string
cloud_function_v2_target_instance = CloudFunctionV2Target.from_json(json)
# print the JSON string representation of the object
print(CloudFunctionV2Target.to_json())

# convert the object into a dict
cloud_function_v2_target_dict = cloud_function_v2_target_instance.to_dict()
# create an instance of CloudFunctionV2Target from a dict
cloud_function_v2_target_from_dict = CloudFunctionV2Target.from_dict(cloud_function_v2_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


