# GoogleCloudDataplexV1DataProfileSpecSelectedFields

The specification for fields to include or exclude in data profile scan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_names** | **List[str]** | Optional. Expected input is a list of fully qualified names of fields as in the schema.Only top-level field names for nested fields are supported. For instance, if &#39;x&#39; is of nested field type, listing &#39;x&#39; is supported but &#39;x.y.z&#39; is not supported. Here &#39;y&#39; and &#39;y.z&#39; are nested fields of &#39;x&#39;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_profile_spec_selected_fields import GoogleCloudDataplexV1DataProfileSpecSelectedFields

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataProfileSpecSelectedFields from a JSON string
google_cloud_dataplex_v1_data_profile_spec_selected_fields_instance = GoogleCloudDataplexV1DataProfileSpecSelectedFields.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataProfileSpecSelectedFields.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_profile_spec_selected_fields_dict = google_cloud_dataplex_v1_data_profile_spec_selected_fields_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataProfileSpecSelectedFields from a dict
google_cloud_dataplex_v1_data_profile_spec_selected_fields_from_dict = GoogleCloudDataplexV1DataProfileSpecSelectedFields.from_dict(google_cloud_dataplex_v1_data_profile_spec_selected_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


