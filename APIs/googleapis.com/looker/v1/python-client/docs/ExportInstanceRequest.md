# ExportInstanceRequest

Request options for exporting data of an Instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_config** | [**ExportEncryptionConfig**](ExportEncryptionConfig.md) |  | [optional] 
**gcs_uri** | **str** | The path to the folder in Google Cloud Storage where the export will be stored. The URI is in the form &#x60;gs://bucketName/folderName&#x60;. | [optional] 

## Example

```python
from openapi_client.models.export_instance_request import ExportInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportInstanceRequest from a JSON string
export_instance_request_instance = ExportInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(ExportInstanceRequest.to_json())

# convert the object into a dict
export_instance_request_dict = export_instance_request_instance.to_dict()
# create an instance of ExportInstanceRequest from a dict
export_instance_request_from_dict = ExportInstanceRequest.from_dict(export_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


