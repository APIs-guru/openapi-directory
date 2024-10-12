# TypeMeta

TypeMeta is the type information needed for content unmarshalling of Kubernetes resources in the manifest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | APIVersion of the resource (e.g. v1). | [optional] 
**kind** | **str** | Kind of the resource (e.g. Deployment). | [optional] 

## Example

```python
from openapi_client.models.type_meta import TypeMeta

# TODO update the JSON string below
json = "{}"
# create an instance of TypeMeta from a JSON string
type_meta_instance = TypeMeta.from_json(json)
# print the JSON string representation of the object
print(TypeMeta.to_json())

# convert the object into a dict
type_meta_dict = type_meta_instance.to_dict()
# create an instance of TypeMeta from a dict
type_meta_from_dict = TypeMeta.from_dict(type_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


