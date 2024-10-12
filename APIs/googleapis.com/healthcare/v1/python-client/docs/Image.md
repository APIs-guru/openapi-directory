# Image

Raw bytes representing consent artifact content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_uri** | **str** | Input only. Points to a Cloud Storage URI containing the consent artifact content. The URI must be in the following format: &#x60;gs://{bucket_id}/{object_id}&#x60;. The Cloud Healthcare API service account must have the &#x60;roles/storage.objectViewer&#x60; Cloud IAM role for this Cloud Storage location. The consent artifact content at this URI is copied to a Cloud Storage location managed by the Cloud Healthcare API. Responses to fetching requests return the consent artifact content in raw_bytes. | [optional] 
**raw_bytes** | **bytearray** | Consent artifact content represented as a stream of bytes. This field is populated when returned in GetConsentArtifact response, but not included in CreateConsentArtifact and ListConsentArtifact response. | [optional] 

## Example

```python
from openapi_client.models.image import Image

# TODO update the JSON string below
json = "{}"
# create an instance of Image from a JSON string
image_instance = Image.from_json(json)
# print the JSON string representation of the object
print(Image.to_json())

# convert the object into a dict
image_dict = image_instance.to_dict()
# create an instance of Image from a dict
image_from_dict = Image.from_dict(image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


