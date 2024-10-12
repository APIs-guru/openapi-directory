# LogProfileResource

The log profile resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LogProfileProperties**](LogProfileProperties.md) |  | 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.log_profile_resource import LogProfileResource

# TODO update the JSON string below
json = "{}"
# create an instance of LogProfileResource from a JSON string
log_profile_resource_instance = LogProfileResource.from_json(json)
# print the JSON string representation of the object
print(LogProfileResource.to_json())

# convert the object into a dict
log_profile_resource_dict = log_profile_resource_instance.to_dict()
# create an instance of LogProfileResource from a dict
log_profile_resource_from_dict = LogProfileResource.from_dict(log_profile_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


