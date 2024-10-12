# BuildNote

Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**builder_version** | **str** | Required. Immutable. Version of the builder which produced this build. | [optional] 

## Example

```python
from openapi_client.models.build_note import BuildNote

# TODO update the JSON string below
json = "{}"
# create an instance of BuildNote from a JSON string
build_note_instance = BuildNote.from_json(json)
# print the JSON string representation of the object
print(BuildNote.to_json())

# convert the object into a dict
build_note_dict = build_note_instance.to_dict()
# create an instance of BuildNote from a dict
build_note_from_dict = BuildNote.from_dict(build_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


