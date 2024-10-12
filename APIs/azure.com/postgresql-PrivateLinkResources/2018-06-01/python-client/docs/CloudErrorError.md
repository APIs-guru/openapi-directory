# CloudErrorError

The resource management error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_info** | [**List[CloudErrorErrorAdditionalInfoInner]**](CloudErrorErrorAdditionalInfoInner.md) | The error additional info. | [optional] [readonly] 
**code** | **str** | The error code. | [optional] [readonly] 
**details** | **List[object]** | The error details. | [optional] [readonly] 
**message** | **str** | The error message. | [optional] [readonly] 
**target** | **str** | The error target. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cloud_error_error import CloudErrorError

# TODO update the JSON string below
json = "{}"
# create an instance of CloudErrorError from a JSON string
cloud_error_error_instance = CloudErrorError.from_json(json)
# print the JSON string representation of the object
print(CloudErrorError.to_json())

# convert the object into a dict
cloud_error_error_dict = cloud_error_error_instance.to_dict()
# create an instance of CloudErrorError from a dict
cloud_error_error_from_dict = CloudErrorError.from_dict(cloud_error_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


