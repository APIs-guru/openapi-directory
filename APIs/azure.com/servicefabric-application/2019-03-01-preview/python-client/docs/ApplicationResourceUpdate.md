# ApplicationResourceUpdate

The application resource for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApplicationResourceUpdateProperties**](ApplicationResourceUpdateProperties.md) |  | [optional] 
**etag** | **str** | Azure resource etag. | [optional] [readonly] 
**id** | **str** | Azure resource identifier. | [optional] [readonly] 
**location** | **str** | Azure resource location. | [optional] 
**name** | **str** | Azure resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Azure resource tags. | [optional] 
**type** | **str** | Azure resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_resource_update import ApplicationResourceUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationResourceUpdate from a JSON string
application_resource_update_instance = ApplicationResourceUpdate.from_json(json)
# print the JSON string representation of the object
print(ApplicationResourceUpdate.to_json())

# convert the object into a dict
application_resource_update_dict = application_resource_update_instance.to_dict()
# create an instance of ApplicationResourceUpdate from a dict
application_resource_update_from_dict = ApplicationResourceUpdate.from_dict(application_resource_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


