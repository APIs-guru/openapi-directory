# ExternalRef

An External Reference allows a Package to reference an external source of additional information, metadata, enumerations, asset identifiers, or downloadable content believed to be relevant to the Package

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | An External Reference allows a Package to reference an external source of additional information, metadata, enumerations, asset identifiers, or downloadable content believed to be relevant to the Package | [optional] 
**comment** | **str** | Human-readable information about the purpose and target of the reference | [optional] 
**locator** | **str** | The unique string with no spaces necessary to access the package-specific information, metadata, or content within the target location | [optional] 
**type** | **str** | Type of category (e.g. &#39;npm&#39; for the PACKAGE_MANAGER category) | [optional] 

## Example

```python
from openapi_client.models.external_ref import ExternalRef

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalRef from a JSON string
external_ref_instance = ExternalRef.from_json(json)
# print the JSON string representation of the object
print(ExternalRef.to_json())

# convert the object into a dict
external_ref_dict = external_ref_instance.to_dict()
# create an instance of ExternalRef from a dict
external_ref_from_dict = ExternalRef.from_dict(external_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


