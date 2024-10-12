# GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions

Describe JSON data format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_type_inference** | **bool** | Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean). | [optional] 
**encoding** | **str** | Optional. The character encoding of the data. The default is UTF-8. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_zone_discovery_spec_json_options import GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions from a JSON string
google_cloud_dataplex_v1_zone_discovery_spec_json_options_instance = GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_zone_discovery_spec_json_options_dict = google_cloud_dataplex_v1_zone_discovery_spec_json_options_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions from a dict
google_cloud_dataplex_v1_zone_discovery_spec_json_options_from_dict = GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions.from_dict(google_cloud_dataplex_v1_zone_discovery_spec_json_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


