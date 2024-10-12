# ApplicationResourceDescription

Describes a service fabric application resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Application resource name. | 
**properties** | [**ApplicationProperties**](ApplicationProperties.md) |  | 

## Example

```python
from openapi_client.models.application_resource_description import ApplicationResourceDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationResourceDescription from a JSON string
application_resource_description_instance = ApplicationResourceDescription.from_json(json)
# print the JSON string representation of the object
print(ApplicationResourceDescription.to_json())

# convert the object into a dict
application_resource_description_dict = application_resource_description_instance.to_dict()
# create an instance of ApplicationResourceDescription from a dict
application_resource_description_from_dict = ApplicationResourceDescription.from_dict(application_resource_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


