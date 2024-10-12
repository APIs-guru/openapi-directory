# ApplicationTypeResource

The application type name resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApplicationTypeResourceProperties**](ApplicationTypeResourceProperties.md) |  | [optional] 
**id** | **str** | Azure resource identifier. | [optional] [readonly] 
**location** | **str** | Azure resource location. | [optional] 
**name** | **str** | Azure resource name. | [optional] [readonly] 
**type** | **str** | Azure resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_type_resource import ApplicationTypeResource

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTypeResource from a JSON string
application_type_resource_instance = ApplicationTypeResource.from_json(json)
# print the JSON string representation of the object
print(ApplicationTypeResource.to_json())

# convert the object into a dict
application_type_resource_dict = application_type_resource_instance.to_dict()
# create an instance of ApplicationTypeResource from a dict
application_type_resource_from_dict = ApplicationTypeResource.from_dict(application_type_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


