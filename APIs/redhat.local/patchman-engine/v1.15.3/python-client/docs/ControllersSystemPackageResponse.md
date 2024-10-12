# ControllersSystemPackageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ControllersSystemPackageData]**](ControllersSystemPackageData.md) |  | [optional] 
**links** | [**ControllersLinks**](ControllersLinks.md) |  | [optional] 
**meta** | [**ControllersListMeta**](ControllersListMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.controllers_system_package_response import ControllersSystemPackageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersSystemPackageResponse from a JSON string
controllers_system_package_response_instance = ControllersSystemPackageResponse.from_json(json)
# print the JSON string representation of the object
print(ControllersSystemPackageResponse.to_json())

# convert the object into a dict
controllers_system_package_response_dict = controllers_system_package_response_instance.to_dict()
# create an instance of ControllersSystemPackageResponse from a dict
controllers_system_package_response_from_dict = ControllersSystemPackageResponse.from_dict(controllers_system_package_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


