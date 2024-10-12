# GoogleCloudDataplexV1Action

Action represents an issue requiring administrator action for resolution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **str** | Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}. | [optional] [readonly] 
**category** | **str** | The category of issue associated with the action. | [optional] 
**data_locations** | **List[str]** | The list of data locations associated with this action. Cloud Storage locations are represented as URI paths(E.g. gs://bucket/table1/year&#x3D;2020/month&#x3D;Jan/). BigQuery locations refer to resource names(E.g. bigquery.googleapis.com/projects/project-id/datasets/dataset-id). | [optional] 
**detect_time** | **str** | The time that the issue was detected. | [optional] 
**failed_security_policy_apply** | [**GoogleCloudDataplexV1ActionFailedSecurityPolicyApply**](GoogleCloudDataplexV1ActionFailedSecurityPolicyApply.md) |  | [optional] 
**incompatible_data_schema** | [**GoogleCloudDataplexV1ActionIncompatibleDataSchema**](GoogleCloudDataplexV1ActionIncompatibleDataSchema.md) |  | [optional] 
**invalid_data_format** | [**GoogleCloudDataplexV1ActionInvalidDataFormat**](GoogleCloudDataplexV1ActionInvalidDataFormat.md) |  | [optional] 
**invalid_data_organization** | **object** | Action details for invalid data arrangement. | [optional] 
**invalid_data_partition** | [**GoogleCloudDataplexV1ActionInvalidDataPartition**](GoogleCloudDataplexV1ActionInvalidDataPartition.md) |  | [optional] 
**issue** | **str** | Detailed description of the issue requiring action. | [optional] 
**lake** | **str** | Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. | [optional] [readonly] 
**missing_data** | **object** | Action details for absence of data detected by discovery. | [optional] 
**missing_resource** | **object** | Action details for resource references in assets that cannot be located. | [optional] 
**name** | **str** | Output only. The relative resource name of the action, of the form: projects/{project}/locations/{location}/lakes/{lake}/actions/{action} projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/actions/{action} projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/assets/{asset}/actions/{action}. | [optional] [readonly] 
**unauthorized_resource** | **object** | Action details for unauthorized resource issues raised to indicate that the service account associated with the lake instance is not authorized to access or manage the resource associated with an asset. | [optional] 
**zone** | **str** | Output only. The relative resource name of the zone, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_action import GoogleCloudDataplexV1Action

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1Action from a JSON string
google_cloud_dataplex_v1_action_instance = GoogleCloudDataplexV1Action.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1Action.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_action_dict = google_cloud_dataplex_v1_action_instance.to_dict()
# create an instance of GoogleCloudDataplexV1Action from a dict
google_cloud_dataplex_v1_action_from_dict = GoogleCloudDataplexV1Action.from_dict(google_cloud_dataplex_v1_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


