# LegacyCodePushStatusMetricMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_version** | **str** |  | [optional] 
**client_unique_id** | **str** |  | [optional] 
**deployment_key** | **str** |  | [optional] 
**label** | **str** |  | [optional] 
**previous_deployment_key** | **str** |  | [optional] 
**previous_label_or_app_version** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.legacy_code_push_status_metric_metadata import LegacyCodePushStatusMetricMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyCodePushStatusMetricMetadata from a JSON string
legacy_code_push_status_metric_metadata_instance = LegacyCodePushStatusMetricMetadata.from_json(json)
# print the JSON string representation of the object
print(LegacyCodePushStatusMetricMetadata.to_json())

# convert the object into a dict
legacy_code_push_status_metric_metadata_dict = legacy_code_push_status_metric_metadata_instance.to_dict()
# create an instance of LegacyCodePushStatusMetricMetadata from a dict
legacy_code_push_status_metric_metadata_from_dict = LegacyCodePushStatusMetricMetadata.from_dict(legacy_code_push_status_metric_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


