# ApplicationPackage

An application package which represents a particular version of an application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | The format of the application package, if the package is active. | [optional] [readonly] 
**id** | **str** | The ID of the application. | [optional] [readonly] 
**last_activation_time** | **datetime** | The time at which the package was last activated, if the package is active. | [optional] [readonly] 
**state** | **str** | The current state of the application package. | [optional] [readonly] 
**storage_url** | **str** | The URL for the application package in Azure Storage. | [optional] [readonly] 
**storage_url_expiry** | **datetime** | The UTC time at which the Azure Storage URL will expire. | [optional] [readonly] 
**version** | **str** | The version of the application package. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_package import ApplicationPackage

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPackage from a JSON string
application_package_instance = ApplicationPackage.from_json(json)
# print the JSON string representation of the object
print(ApplicationPackage.to_json())

# convert the object into a dict
application_package_dict = application_package_instance.to_dict()
# create an instance of ApplicationPackage from a dict
application_package_from_dict = ApplicationPackage.from_dict(application_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


