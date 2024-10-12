# BaselineProperties

The baseline properties class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | **str** | The aggregation type of the metric. | [optional] 
**baseline** | [**List[Baseline]**](Baseline.md) | the baseline values for each sensitivity. | [optional] 
**interval** | **str** | The interval (window size) for which the metric data was returned in.  This may be adjusted in the future and returned back from what was originally requested.  This is not present if a metadata request was made. | [optional] 
**metadata** | [**List[BaselineMetadataValue]**](BaselineMetadataValue.md) | the baseline metadata values. | [optional] 
**timespan** | **str** | The timespan for which the data was retrieved. Its value consists of two datetimes concatenated, separated by &#39;/&#39;.  This may be adjusted in the future and returned back from what was originally requested. | [optional] 
**timestamps** | **List[datetime]** | the array of timestamps of the baselines. | [optional] 

## Example

```python
from openapi_client.models.baseline_properties import BaselineProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BaselineProperties from a JSON string
baseline_properties_instance = BaselineProperties.from_json(json)
# print the JSON string representation of the object
print(BaselineProperties.to_json())

# convert the object into a dict
baseline_properties_dict = baseline_properties_instance.to_dict()
# create an instance of BaselineProperties from a dict
baseline_properties_from_dict = BaselineProperties.from_dict(baseline_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


