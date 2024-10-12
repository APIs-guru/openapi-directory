# Application

Contains information about an application in a Batch account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_updates** | **bool** | A value indicating whether packages within the application may be overwritten using the same version string. | [optional] 
**default_version** | **str** | The package to use if a client requests the application but does not specify a version. | [optional] 
**display_name** | **str** | The display name for the application. | [optional] 
**id** | **str** | A string that uniquely identifies the application within the account. | [optional] 
**packages** | [**List[ApplicationPackage]**](ApplicationPackage.md) | The list of packages under this application. | [optional] 

## Example

```python
from openapi_client.models.application import Application

# TODO update the JSON string below
json = "{}"
# create an instance of Application from a JSON string
application_instance = Application.from_json(json)
# print the JSON string representation of the object
print(Application.to_json())

# convert the object into a dict
application_dict = application_instance.to_dict()
# create an instance of Application from a dict
application_from_dict = Application.from_dict(application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


