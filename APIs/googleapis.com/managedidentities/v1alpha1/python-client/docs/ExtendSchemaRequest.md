# ExtendSchemaRequest

ExtendSchemaRequest is the request message for ExtendSchema method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Required. Description for Schema Change. | [optional] 
**file_contents** | **bytearray** | File uploaded as a byte stream input. | [optional] 
**gcs_path** | **str** | File stored in Cloud Storage bucket and represented in the form projects/{project_id}/buckets/{bucket_name}/objects/{object_name} File should be in the same project as the domain. | [optional] 

## Example

```python
from openapi_client.models.extend_schema_request import ExtendSchemaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendSchemaRequest from a JSON string
extend_schema_request_instance = ExtendSchemaRequest.from_json(json)
# print the JSON string representation of the object
print(ExtendSchemaRequest.to_json())

# convert the object into a dict
extend_schema_request_dict = extend_schema_request_instance.to_dict()
# create an instance of ExtendSchemaRequest from a dict
extend_schema_request_from_dict = ExtendSchemaRequest.from_dict(extend_schema_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


