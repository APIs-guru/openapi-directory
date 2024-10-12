# CloudFunctionInfo

For display only. Metadata associated with a Cloud Function.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of a Cloud Function. | [optional] 
**location** | **str** | Location in which the Cloud Function is deployed. | [optional] 
**uri** | **str** | URI of a Cloud Function. | [optional] 
**version_id** | **str** | Latest successfully deployed version id of the Cloud Function. | [optional] 

## Example

```python
from openapi_client.models.cloud_function_info import CloudFunctionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CloudFunctionInfo from a JSON string
cloud_function_info_instance = CloudFunctionInfo.from_json(json)
# print the JSON string representation of the object
print(CloudFunctionInfo.to_json())

# convert the object into a dict
cloud_function_info_dict = cloud_function_info_instance.to_dict()
# create an instance of CloudFunctionInfo from a dict
cloud_function_info_from_dict = CloudFunctionInfo.from_dict(cloud_function_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


