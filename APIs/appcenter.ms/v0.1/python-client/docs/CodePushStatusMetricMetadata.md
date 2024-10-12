# CodePushStatusMetricMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_version** | **str** |  | [optional] 
**client_unique_id** | **str** |  | [optional] 
**deployment_key** | **str** |  | 
**label** | **str** |  | [optional] 
**previous_deployment_key** | **str** |  | [optional] 
**previous_label_or_app_version** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.code_push_status_metric_metadata import CodePushStatusMetricMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CodePushStatusMetricMetadata from a JSON string
code_push_status_metric_metadata_instance = CodePushStatusMetricMetadata.from_json(json)
# print the JSON string representation of the object
print(CodePushStatusMetricMetadata.to_json())

# convert the object into a dict
code_push_status_metric_metadata_dict = code_push_status_metric_metadata_instance.to_dict()
# create an instance of CodePushStatusMetricMetadata from a dict
code_push_status_metric_metadata_from_dict = CodePushStatusMetricMetadata.from_dict(code_push_status_metric_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


