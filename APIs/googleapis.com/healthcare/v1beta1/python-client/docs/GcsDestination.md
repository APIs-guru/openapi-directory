# GcsDestination

The Cloud Storage output destination. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM roles on the Cloud Storage location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_structure** | **str** | The format of the exported HL7v2 message files. | [optional] 
**message_view** | **str** | Specifies the parts of the Message resource to include in the export. If not specified, FULL is used. | [optional] 
**uri_prefix** | **str** | URI of an existing Cloud Storage directory where the server writes result files, in the format &#x60;gs://{bucket-id}/{path/to/destination/dir}&#x60;. If there is no trailing slash, the service appends one when composing the object path. | [optional] 

## Example

```python
from openapi_client.models.gcs_destination import GcsDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GcsDestination from a JSON string
gcs_destination_instance = GcsDestination.from_json(json)
# print the JSON string representation of the object
print(GcsDestination.to_json())

# convert the object into a dict
gcs_destination_dict = gcs_destination_instance.to_dict()
# create an instance of GcsDestination from a dict
gcs_destination_from_dict = GcsDestination.from_dict(gcs_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


