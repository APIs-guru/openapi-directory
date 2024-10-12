# ApkSet

A set of apks representing a module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apk_description** | [**List[ApkDescription]**](ApkDescription.md) | Description of the generated apks. | [optional] 
**module_metadata** | [**ModuleMetadata**](ModuleMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.apk_set import ApkSet

# TODO update the JSON string below
json = "{}"
# create an instance of ApkSet from a JSON string
apk_set_instance = ApkSet.from_json(json)
# print the JSON string representation of the object
print(ApkSet.to_json())

# convert the object into a dict
apk_set_dict = apk_set_instance.to_dict()
# create an instance of ApkSet from a dict
apk_set_from_dict = ApkSet.from_dict(apk_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


