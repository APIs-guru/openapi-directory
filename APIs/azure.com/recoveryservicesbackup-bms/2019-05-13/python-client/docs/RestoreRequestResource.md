# RestoreRequestResource

Base class for restore request. Workload-specific restore requests are derived from this class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RestoreRequest**](RestoreRequest.md) |  | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource Id represents the complete path to the resource. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name associated with the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] [readonly] 

## Example

```python
from openapi_client.models.restore_request_resource import RestoreRequestResource

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreRequestResource from a JSON string
restore_request_resource_instance = RestoreRequestResource.from_json(json)
# print the JSON string representation of the object
print(RestoreRequestResource.to_json())

# convert the object into a dict
restore_request_resource_dict = restore_request_resource_instance.to_dict()
# create an instance of RestoreRequestResource from a dict
restore_request_resource_from_dict = RestoreRequestResource.from_dict(restore_request_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


