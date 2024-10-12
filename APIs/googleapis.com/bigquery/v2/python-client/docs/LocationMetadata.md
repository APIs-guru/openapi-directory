# LocationMetadata

BigQuery-specific metadata about a location. This will be set on google.cloud.location.Location.metadata in Cloud Location API responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**legacy_location_id** | **str** | The legacy BigQuery location ID, e.g. “EU” for the “europe” location. This is for any API consumers that need the legacy “US” and “EU” locations. | [optional] 

## Example

```python
from openapi_client.models.location_metadata import LocationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of LocationMetadata from a JSON string
location_metadata_instance = LocationMetadata.from_json(json)
# print the JSON string representation of the object
print(LocationMetadata.to_json())

# convert the object into a dict
location_metadata_dict = location_metadata_instance.to_dict()
# create an instance of LocationMetadata from a dict
location_metadata_from_dict = LocationMetadata.from_dict(location_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


