# Build

Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**builder_version** | **str** | Required. Immutable. Version of the builder which produced this build. | [optional] 
**signature** | [**BuildSignature**](BuildSignature.md) |  | [optional] 

## Example

```python
from openapi_client.models.build import Build

# TODO update the JSON string below
json = "{}"
# create an instance of Build from a JSON string
build_instance = Build.from_json(json)
# print the JSON string representation of the object
print(Build.to_json())

# convert the object into a dict
build_dict = build_instance.to_dict()
# create an instance of Build from a dict
build_from_dict = Build.from_dict(build_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


