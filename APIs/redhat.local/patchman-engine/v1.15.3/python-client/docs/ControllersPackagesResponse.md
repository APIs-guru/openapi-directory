# ControllersPackagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ControllersPackageItem]**](ControllersPackageItem.md) |  | [optional] 
**links** | [**ControllersLinks**](ControllersLinks.md) |  | [optional] 
**meta** | [**ControllersListMeta**](ControllersListMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.controllers_packages_response import ControllersPackagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersPackagesResponse from a JSON string
controllers_packages_response_instance = ControllersPackagesResponse.from_json(json)
# print the JSON string representation of the object
print(ControllersPackagesResponse.to_json())

# convert the object into a dict
controllers_packages_response_dict = controllers_packages_response_instance.to_dict()
# create an instance of ControllersPackagesResponse from a dict
controllers_packages_response_from_dict = ControllersPackagesResponse.from_dict(controllers_packages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


