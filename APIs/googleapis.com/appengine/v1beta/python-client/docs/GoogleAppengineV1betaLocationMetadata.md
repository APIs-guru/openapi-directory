# GoogleAppengineV1betaLocationMetadata

Metadata for the given google.cloud.location.Location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flexible_environment_available** | **bool** | App Engine flexible environment is available in the given location.@OutputOnly | [optional] 
**search_api_available** | **bool** | Output only. Search API (https://cloud.google.com/appengine/docs/standard/python/search) is available in the given location. | [optional] [readonly] 
**standard_environment_available** | **bool** | App Engine standard environment is available in the given location.@OutputOnly | [optional] 

## Example

```python
from openapi_client.models.google_appengine_v1beta_location_metadata import GoogleAppengineV1betaLocationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppengineV1betaLocationMetadata from a JSON string
google_appengine_v1beta_location_metadata_instance = GoogleAppengineV1betaLocationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleAppengineV1betaLocationMetadata.to_json())

# convert the object into a dict
google_appengine_v1beta_location_metadata_dict = google_appengine_v1beta_location_metadata_instance.to_dict()
# create an instance of GoogleAppengineV1betaLocationMetadata from a dict
google_appengine_v1beta_location_metadata_from_dict = GoogleAppengineV1betaLocationMetadata.from_dict(google_appengine_v1beta_location_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


