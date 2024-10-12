# CloudErrorErrorAdditionalInfoInner

The resource management error additional info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info** | **object** | The additional info. | [optional] [readonly] 
**type** | **str** | The additional info type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cloud_error_error_additional_info_inner import CloudErrorErrorAdditionalInfoInner

# TODO update the JSON string below
json = "{}"
# create an instance of CloudErrorErrorAdditionalInfoInner from a JSON string
cloud_error_error_additional_info_inner_instance = CloudErrorErrorAdditionalInfoInner.from_json(json)
# print the JSON string representation of the object
print(CloudErrorErrorAdditionalInfoInner.to_json())

# convert the object into a dict
cloud_error_error_additional_info_inner_dict = cloud_error_error_additional_info_inner_instance.to_dict()
# create an instance of CloudErrorErrorAdditionalInfoInner from a dict
cloud_error_error_additional_info_inner_from_dict = CloudErrorErrorAdditionalInfoInner.from_dict(cloud_error_error_additional_info_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


