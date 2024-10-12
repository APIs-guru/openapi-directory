# GoogleCloudFunctionsV2alphaLocationMetadata

Extra GCF specific location information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environments** | **List[str]** | The Cloud Function environments this location supports. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_functions_v2alpha_location_metadata import GoogleCloudFunctionsV2alphaLocationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudFunctionsV2alphaLocationMetadata from a JSON string
google_cloud_functions_v2alpha_location_metadata_instance = GoogleCloudFunctionsV2alphaLocationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudFunctionsV2alphaLocationMetadata.to_json())

# convert the object into a dict
google_cloud_functions_v2alpha_location_metadata_dict = google_cloud_functions_v2alpha_location_metadata_instance.to_dict()
# create an instance of GoogleCloudFunctionsV2alphaLocationMetadata from a dict
google_cloud_functions_v2alpha_location_metadata_from_dict = GoogleCloudFunctionsV2alphaLocationMetadata.from_dict(google_cloud_functions_v2alpha_location_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


