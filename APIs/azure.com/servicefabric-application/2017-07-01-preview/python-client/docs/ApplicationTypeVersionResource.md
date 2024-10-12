# ApplicationTypeVersionResource

An application type version resource for the specified application type name resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApplicationTypeVersionResourceProperties**](ApplicationTypeVersionResourceProperties.md) |  | [optional] 
**id** | **str** | Azure resource identifier. | [optional] [readonly] 
**location** | **str** | Azure resource location. | [optional] 
**name** | **str** | Azure resource name. | [optional] [readonly] 
**type** | **str** | Azure resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_type_version_resource import ApplicationTypeVersionResource

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTypeVersionResource from a JSON string
application_type_version_resource_instance = ApplicationTypeVersionResource.from_json(json)
# print the JSON string representation of the object
print(ApplicationTypeVersionResource.to_json())

# convert the object into a dict
application_type_version_resource_dict = application_type_version_resource_instance.to_dict()
# create an instance of ApplicationTypeVersionResource from a dict
application_type_version_resource_from_dict = ApplicationTypeVersionResource.from_dict(application_type_version_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


