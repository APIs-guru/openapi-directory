# MetricMetadataList

The list of metric metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token for paginated calls. | [optional] 
**next_link** | **str** | The link used to get the next page of operations. | [optional] 
**total_count** | **int** | The total count of service elements. | [optional] 
**value** | [**List[MetricMetadata]**](MetricMetadata.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.metric_metadata_list import MetricMetadataList

# TODO update the JSON string below
json = "{}"
# create an instance of MetricMetadataList from a JSON string
metric_metadata_list_instance = MetricMetadataList.from_json(json)
# print the JSON string representation of the object
print(MetricMetadataList.to_json())

# convert the object into a dict
metric_metadata_list_dict = metric_metadata_list_instance.to_dict()
# create an instance of MetricMetadataList from a dict
metric_metadata_list_from_dict = MetricMetadataList.from_dict(metric_metadata_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


