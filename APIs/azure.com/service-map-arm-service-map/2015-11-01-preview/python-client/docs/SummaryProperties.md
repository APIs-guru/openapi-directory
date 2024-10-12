# SummaryProperties

Base for all summaries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | Summary interval end time. | 
**start_time** | **datetime** | Summary interval start time. | 

## Example

```python
from openapi_client.models.summary_properties import SummaryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SummaryProperties from a JSON string
summary_properties_instance = SummaryProperties.from_json(json)
# print the JSON string representation of the object
print(SummaryProperties.to_json())

# convert the object into a dict
summary_properties_dict = summary_properties_instance.to_dict()
# create an instance of SummaryProperties from a dict
summary_properties_from_dict = SummaryProperties.from_dict(summary_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


