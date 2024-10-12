# BuildMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finished_on** | **str** |  | [optional] 
**invocation_id** | **str** |  | [optional] 
**started_on** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.build_metadata import BuildMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of BuildMetadata from a JSON string
build_metadata_instance = BuildMetadata.from_json(json)
# print the JSON string representation of the object
print(BuildMetadata.to_json())

# convert the object into a dict
build_metadata_dict = build_metadata_instance.to_dict()
# create an instance of BuildMetadata from a dict
build_metadata_from_dict = BuildMetadata.from_dict(build_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


