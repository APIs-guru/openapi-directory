# ApplicationPackageReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**version** | **str** | If this is omitted, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences. If you are calling the REST API directly, the HTTP status code is 409. | [optional] 

## Example

```python
from openapi_client.models.application_package_reference import ApplicationPackageReference

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPackageReference from a JSON string
application_package_reference_instance = ApplicationPackageReference.from_json(json)
# print the JSON string representation of the object
print(ApplicationPackageReference.to_json())

# convert the object into a dict
application_package_reference_dict = application_package_reference_instance.to_dict()
# create an instance of ApplicationPackageReference from a dict
application_package_reference_from_dict = ApplicationPackageReference.from_dict(application_package_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


