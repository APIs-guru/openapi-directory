# ImportInstanceRequest

Requestion options for importing looker data to an Instance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_uri** | **str** | Path to the import folder in Google Cloud Storage, in the form &#x60;gs://bucketName/folderName&#x60;. | [optional] 

## Example

```python
from openapi_client.models.import_instance_request import ImportInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportInstanceRequest from a JSON string
import_instance_request_instance = ImportInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(ImportInstanceRequest.to_json())

# convert the object into a dict
import_instance_request_dict = import_instance_request_instance.to_dict()
# create an instance of ImportInstanceRequest from a dict
import_instance_request_from_dict = ImportInstanceRequest.from_dict(import_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


