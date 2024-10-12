# SourceUploadDefinition

The properties of a response to source upload request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relative_path** | **str** | The relative path to the source. This is used to submit the subsequent queue build request. | [optional] 
**upload_url** | **str** | The URL where the client can upload the source. | [optional] 

## Example

```python
from openapi_client.models.source_upload_definition import SourceUploadDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of SourceUploadDefinition from a JSON string
source_upload_definition_instance = SourceUploadDefinition.from_json(json)
# print the JSON string representation of the object
print(SourceUploadDefinition.to_json())

# convert the object into a dict
source_upload_definition_dict = source_upload_definition_instance.to_dict()
# create an instance of SourceUploadDefinition from a dict
source_upload_definition_from_dict = SourceUploadDefinition.from_dict(source_upload_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


