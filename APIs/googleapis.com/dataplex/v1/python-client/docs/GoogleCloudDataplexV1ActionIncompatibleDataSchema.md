# GoogleCloudDataplexV1ActionIncompatibleDataSchema

Action details for incompatible schemas detected by discovery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**existing_schema** | **str** | The existing and expected schema of the table. The schema is provided as a JSON formatted structure listing columns and data types. | [optional] 
**new_schema** | **str** | The new and incompatible schema within the table. The schema is provided as a JSON formatted structured listing columns and data types. | [optional] 
**sampled_data_locations** | **List[str]** | The list of data locations sampled and used for format/schema inference. | [optional] 
**schema_change** | **str** | Whether the action relates to a schema that is incompatible or modified. | [optional] 
**table** | **str** | The name of the table containing invalid data. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_action_incompatible_data_schema import GoogleCloudDataplexV1ActionIncompatibleDataSchema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ActionIncompatibleDataSchema from a JSON string
google_cloud_dataplex_v1_action_incompatible_data_schema_instance = GoogleCloudDataplexV1ActionIncompatibleDataSchema.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ActionIncompatibleDataSchema.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_action_incompatible_data_schema_dict = google_cloud_dataplex_v1_action_incompatible_data_schema_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ActionIncompatibleDataSchema from a dict
google_cloud_dataplex_v1_action_incompatible_data_schema_from_dict = GoogleCloudDataplexV1ActionIncompatibleDataSchema.from_dict(google_cloud_dataplex_v1_action_incompatible_data_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


