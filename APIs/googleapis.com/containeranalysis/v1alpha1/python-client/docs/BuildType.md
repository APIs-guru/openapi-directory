# BuildType

Note holding the version of the provider's builder and the signature of the provenance message in linked BuildDetails.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**builder_version** | **str** | Version of the builder which produced this Note. | [optional] 
**signature** | [**BuildSignature**](BuildSignature.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_type import BuildType

# TODO update the JSON string below
json = "{}"
# create an instance of BuildType from a JSON string
build_type_instance = BuildType.from_json(json)
# print the JSON string representation of the object
print(BuildType.to_json())

# convert the object into a dict
build_type_dict = build_type_instance.to_dict()
# create an instance of BuildType from a dict
build_type_from_dict = BuildType.from_dict(build_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


