# BigQueryDestinationConfig

BigQuery destination configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_freshness** | **str** | The guaranteed data freshness (in seconds) when querying tables created by the stream. Editing this field will only affect new tables created in the future, but existing tables will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost. | [optional] 
**single_target_dataset** | [**SingleTargetDataset**](SingleTargetDataset.md) |  | [optional] 
**source_hierarchy_datasets** | [**SourceHierarchyDatasets**](SourceHierarchyDatasets.md) |  | [optional] 

## Example

```python
from openapi_client.models.big_query_destination_config import BigQueryDestinationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BigQueryDestinationConfig from a JSON string
big_query_destination_config_instance = BigQueryDestinationConfig.from_json(json)
# print the JSON string representation of the object
print(BigQueryDestinationConfig.to_json())

# convert the object into a dict
big_query_destination_config_dict = big_query_destination_config_instance.to_dict()
# create an instance of BigQueryDestinationConfig from a dict
big_query_destination_config_from_dict = BigQueryDestinationConfig.from_dict(big_query_destination_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


