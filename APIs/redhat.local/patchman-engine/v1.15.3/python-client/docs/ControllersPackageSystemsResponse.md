# ControllersPackageSystemsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ControllersPackageSystemItem]**](ControllersPackageSystemItem.md) |  | [optional] 
**links** | [**ControllersLinks**](ControllersLinks.md) |  | [optional] 
**meta** | [**ControllersListMeta**](ControllersListMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.controllers_package_systems_response import ControllersPackageSystemsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersPackageSystemsResponse from a JSON string
controllers_package_systems_response_instance = ControllersPackageSystemsResponse.from_json(json)
# print the JSON string representation of the object
print(ControllersPackageSystemsResponse.to_json())

# convert the object into a dict
controllers_package_systems_response_dict = controllers_package_systems_response_instance.to_dict()
# create an instance of ControllersPackageSystemsResponse from a dict
controllers_package_systems_response_from_dict = ControllersPackageSystemsResponse.from_dict(controllers_package_systems_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


