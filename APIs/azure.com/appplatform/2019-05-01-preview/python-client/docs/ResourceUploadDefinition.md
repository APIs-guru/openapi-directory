# ResourceUploadDefinition

Resource upload definition payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relative_path** | **str** | Source relative path | [optional] 
**upload_url** | **str** | Upload URL | [optional] 

## Example

```python
from openapi_client.models.resource_upload_definition import ResourceUploadDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceUploadDefinition from a JSON string
resource_upload_definition_instance = ResourceUploadDefinition.from_json(json)
# print the JSON string representation of the object
print(ResourceUploadDefinition.to_json())

# convert the object into a dict
resource_upload_definition_dict = resource_upload_definition_instance.to_dict()
# create an instance of ResourceUploadDefinition from a dict
resource_upload_definition_from_dict = ResourceUploadDefinition.from_dict(resource_upload_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


