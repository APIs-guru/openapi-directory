# HeaderInjectionMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_headers** | **object** |  | [optional] 
**delete_headers** | **List[str]** |  | [optional] 
**method** | **str** |  | [optional] 
**path** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.header_injection_meta import HeaderInjectionMeta

# TODO update the JSON string below
json = "{}"
# create an instance of HeaderInjectionMeta from a JSON string
header_injection_meta_instance = HeaderInjectionMeta.from_json(json)
# print the JSON string representation of the object
print(HeaderInjectionMeta.to_json())

# convert the object into a dict
header_injection_meta_dict = header_injection_meta_instance.to_dict()
# create an instance of HeaderInjectionMeta from a dict
header_injection_meta_from_dict = HeaderInjectionMeta.from_dict(header_injection_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


