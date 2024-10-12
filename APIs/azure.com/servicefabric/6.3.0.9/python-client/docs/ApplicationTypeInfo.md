# ApplicationTypeInfo

Information about an application type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type_definition_kind** | [**ApplicationTypeDefinitionKind**](ApplicationTypeDefinitionKind.md) |  | [optional] 
**default_parameter_list** | [**List[ApplicationParameter]**](ApplicationParameter.md) | List of application type parameters that can be overridden when creating or updating the application. | [optional] 
**name** | **str** | The application type name as defined in the application manifest. | [optional] 
**status** | [**ApplicationTypeStatus**](ApplicationTypeStatus.md) |  | [optional] 
**status_details** | **str** | Additional detailed information about the status of the application type. | [optional] 
**version** | **str** | The version of the application type as defined in the application manifest. | [optional] 

## Example

```python
from openapi_client.models.application_type_info import ApplicationTypeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTypeInfo from a JSON string
application_type_info_instance = ApplicationTypeInfo.from_json(json)
# print the JSON string representation of the object
print(ApplicationTypeInfo.to_json())

# convert the object into a dict
application_type_info_dict = application_type_info_instance.to_dict()
# create an instance of ApplicationTypeInfo from a dict
application_type_info_from_dict = ApplicationTypeInfo.from_dict(application_type_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


