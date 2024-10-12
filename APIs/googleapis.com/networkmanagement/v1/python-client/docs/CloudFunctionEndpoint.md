# CloudFunctionEndpoint

Wrapper for Cloud Function attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | A [Cloud Function](https://cloud.google.com/functions) name. | [optional] 

## Example

```python
from openapi_client.models.cloud_function_endpoint import CloudFunctionEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of CloudFunctionEndpoint from a JSON string
cloud_function_endpoint_instance = CloudFunctionEndpoint.from_json(json)
# print the JSON string representation of the object
print(CloudFunctionEndpoint.to_json())

# convert the object into a dict
cloud_function_endpoint_dict = cloud_function_endpoint_instance.to_dict()
# create an instance of CloudFunctionEndpoint from a dict
cloud_function_endpoint_from_dict = CloudFunctionEndpoint.from_dict(cloud_function_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


