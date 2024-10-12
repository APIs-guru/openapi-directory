# ApplicationResource

The application resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApplicationResourceProperties**](ApplicationResourceProperties.md) |  | [optional] 
**id** | **str** | Azure resource identifier. | [optional] [readonly] 
**location** | **str** | Azure resource location. | [optional] 
**name** | **str** | Azure resource name. | [optional] [readonly] 
**type** | **str** | Azure resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_resource import ApplicationResource

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationResource from a JSON string
application_resource_instance = ApplicationResource.from_json(json)
# print the JSON string representation of the object
print(ApplicationResource.to_json())

# convert the object into a dict
application_resource_dict = application_resource_instance.to_dict()
# create an instance of ApplicationResource from a dict
application_resource_from_dict = ApplicationResource.from_dict(application_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


