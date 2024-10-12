# ApplicationTypeResourceProperties

The application type name properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The current deployment or provisioning state, which only appears in the response. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_type_resource_properties import ApplicationTypeResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTypeResourceProperties from a JSON string
application_type_resource_properties_instance = ApplicationTypeResourceProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationTypeResourceProperties.to_json())

# convert the object into a dict
application_type_resource_properties_dict = application_type_resource_properties_instance.to_dict()
# create an instance of ApplicationTypeResourceProperties from a dict
application_type_resource_properties_from_dict = ApplicationTypeResourceProperties.from_dict(application_type_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


