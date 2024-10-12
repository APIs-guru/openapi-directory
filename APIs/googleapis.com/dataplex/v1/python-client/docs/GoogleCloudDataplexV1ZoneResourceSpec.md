# GoogleCloudDataplexV1ZoneResourceSpec

Settings for resources attached as assets within a zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_type** | **str** | Required. Immutable. The location type of the resources that are allowed to be attached to the assets within this zone. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_zone_resource_spec import GoogleCloudDataplexV1ZoneResourceSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ZoneResourceSpec from a JSON string
google_cloud_dataplex_v1_zone_resource_spec_instance = GoogleCloudDataplexV1ZoneResourceSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ZoneResourceSpec.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_zone_resource_spec_dict = google_cloud_dataplex_v1_zone_resource_spec_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ZoneResourceSpec from a dict
google_cloud_dataplex_v1_zone_resource_spec_from_dict = GoogleCloudDataplexV1ZoneResourceSpec.from_dict(google_cloud_dataplex_v1_zone_resource_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


