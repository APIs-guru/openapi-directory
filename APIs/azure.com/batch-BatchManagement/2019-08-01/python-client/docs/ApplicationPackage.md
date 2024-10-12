# ApplicationPackage

An application package which represents a particular version of an application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApplicationPackageProperties**](ApplicationPackageProperties.md) |  | [optional] 
**etag** | **str** | The ETag of the resource, used for concurrency statements. | [optional] [readonly] 
**id** | **str** | The ID of the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

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


