# CreateAppPkg


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_pkg_name** | **str** | Name of the application package to be onboarded. | 
**app_pkg_path** | **str** |  | 
**app_pkg_version** | **str** | Version of the application package to be onboarded. The appPkgName with appPkgVersion can be used to uniquely identify the application package. | 
**app_provider** | **str** | The provider&#39;s name of the application package to be onboarded. | [optional] 
**checksum** | [**Checksum**](Checksum.md) |  | 
**user_defined_data** | **Dict[str, object]** | &#39;This data type represents a list of key-value pairs. The order of the pairs in the list is not significant. In JSON, a set of key-value pairs is represented as an object. It shall comply with the provisions defined in clause 4 of IETF RFC 8259&#39; | [optional] 

## Example

```python
from openapi_client.models.create_app_pkg import CreateAppPkg

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAppPkg from a JSON string
create_app_pkg_instance = CreateAppPkg.from_json(json)
# print the JSON string representation of the object
print(CreateAppPkg.to_json())

# convert the object into a dict
create_app_pkg_dict = create_app_pkg_instance.to_dict()
# create an instance of CreateAppPkg from a dict
create_app_pkg_from_dict = CreateAppPkg.from_dict(create_app_pkg_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


