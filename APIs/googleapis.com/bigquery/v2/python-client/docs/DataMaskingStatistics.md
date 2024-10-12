# DataMaskingStatistics

Statistics for data-masking.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_masking_applied** | **bool** | Whether any accessed data was protected by the data masking. | [optional] 

## Example

```python
from openapi_client.models.data_masking_statistics import DataMaskingStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of DataMaskingStatistics from a JSON string
data_masking_statistics_instance = DataMaskingStatistics.from_json(json)
# print the JSON string representation of the object
print(DataMaskingStatistics.to_json())

# convert the object into a dict
data_masking_statistics_dict = data_masking_statistics_instance.to_dict()
# create an instance of DataMaskingStatistics from a dict
data_masking_statistics_from_dict = DataMaskingStatistics.from_dict(data_masking_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


