# ApplicationDescription

Describes a Service Fabric application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_capacity** | [**ApplicationCapacityDescription**](ApplicationCapacityDescription.md) |  | [optional] 
**managed_application_identity** | [**ManagedApplicationIdentityDescription**](ManagedApplicationIdentityDescription.md) |  | [optional] 
**name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | 
**parameter_list** | [**List[ApplicationParameter]**](ApplicationParameter.md) | List of application parameters with overridden values from their default values specified in the application manifest. | [optional] 
**type_name** | **str** | The application type name as defined in the application manifest. | 
**type_version** | **str** | The version of the application type as defined in the application manifest. | 

## Example

```python
from openapi_client.models.application_description import ApplicationDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationDescription from a JSON string
application_description_instance = ApplicationDescription.from_json(json)
# print the JSON string representation of the object
print(ApplicationDescription.to_json())

# convert the object into a dict
application_description_dict = application_description_instance.to_dict()
# create an instance of ApplicationDescription from a dict
application_description_from_dict = ApplicationDescription.from_dict(application_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


