# GoogleCloudDialogflowCxV3VersionVariantsVariant

A single flow version with specified traffic allocation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_control_group** | **bool** | Whether the variant is for the control group. | [optional] 
**traffic_allocation** | **float** | Percentage of the traffic which should be routed to this version of flow. Traffic allocation for a single flow must sum up to 1.0. | [optional] 
**version** | **str** | The name of the flow version. Format: &#x60;projects//locations//agents//flows//versions/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_version_variants_variant import GoogleCloudDialogflowCxV3VersionVariantsVariant

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3VersionVariantsVariant from a JSON string
google_cloud_dialogflow_cx_v3_version_variants_variant_instance = GoogleCloudDialogflowCxV3VersionVariantsVariant.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3VersionVariantsVariant.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_version_variants_variant_dict = google_cloud_dialogflow_cx_v3_version_variants_variant_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3VersionVariantsVariant from a dict
google_cloud_dialogflow_cx_v3_version_variants_variant_from_dict = GoogleCloudDialogflowCxV3VersionVariantsVariant.from_dict(google_cloud_dialogflow_cx_v3_version_variants_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


