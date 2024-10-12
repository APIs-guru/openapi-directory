# ModelsPackageUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advisory** | **str** |  | [optional] 
**evra** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.models_package_update import ModelsPackageUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPackageUpdate from a JSON string
models_package_update_instance = ModelsPackageUpdate.from_json(json)
# print the JSON string representation of the object
print(ModelsPackageUpdate.to_json())

# convert the object into a dict
models_package_update_dict = models_package_update_instance.to_dict()
# create an instance of ModelsPackageUpdate from a dict
models_package_update_from_dict = ModelsPackageUpdate.from_dict(models_package_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


