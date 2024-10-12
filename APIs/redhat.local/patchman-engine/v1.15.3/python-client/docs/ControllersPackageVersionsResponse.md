# ControllersPackageVersionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ControllersPackageVersionItem]**](ControllersPackageVersionItem.md) |  | [optional] 
**links** | [**ControllersLinks**](ControllersLinks.md) |  | [optional] 
**meta** | [**ControllersListMeta**](ControllersListMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.controllers_package_versions_response import ControllersPackageVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersPackageVersionsResponse from a JSON string
controllers_package_versions_response_instance = ControllersPackageVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(ControllersPackageVersionsResponse.to_json())

# convert the object into a dict
controllers_package_versions_response_dict = controllers_package_versions_response_instance.to_dict()
# create an instance of ControllersPackageVersionsResponse from a dict
controllers_package_versions_response_from_dict = ControllersPackageVersionsResponse.from_dict(controllers_package_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


