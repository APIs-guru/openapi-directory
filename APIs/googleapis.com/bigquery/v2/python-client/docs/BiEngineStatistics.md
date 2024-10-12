# BiEngineStatistics

Statistics for a BI Engine specific query. Populated as part of JobStatistics2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acceleration_mode** | **str** | Output only. Specifies which mode of BI Engine acceleration was performed (if any). | [optional] [readonly] 
**bi_engine_mode** | **str** | Output only. Specifies which mode of BI Engine acceleration was performed (if any). | [optional] [readonly] 
**bi_engine_reasons** | [**List[BiEngineReason]**](BiEngineReason.md) | In case of DISABLED or PARTIAL bi_engine_mode, these contain the explanatory reasons as to why BI Engine could not accelerate. In case the full query was accelerated, this field is not populated. | [optional] 

## Example

```python
from openapi_client.models.bi_engine_statistics import BiEngineStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of BiEngineStatistics from a JSON string
bi_engine_statistics_instance = BiEngineStatistics.from_json(json)
# print the JSON string representation of the object
print(BiEngineStatistics.to_json())

# convert the object into a dict
bi_engine_statistics_dict = bi_engine_statistics_instance.to_dict()
# create an instance of BiEngineStatistics from a dict
bi_engine_statistics_from_dict = BiEngineStatistics.from_dict(bi_engine_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


