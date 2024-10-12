# FrequencyCap

Settings that control the number of times a user may be shown with the same ad during a given time period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_impressions** | **int** | The maximum number of times a user may be shown the same ad during this period. Must be greater than 0. Required when unlimited is &#x60;false&#x60; and max_views is not set. | [optional] 
**time_unit** | **str** | The time unit in which the frequency cap will be applied. Required when unlimited is &#x60;false&#x60;. | [optional] 
**time_unit_count** | **int** | The number of time_unit the frequency cap will last. Required when unlimited is &#x60;false&#x60;. The following restrictions apply based on the value of time_unit: * &#x60;TIME_UNIT_LIFETIME&#x60; - this field is output only and will default to 1 * &#x60;TIME_UNIT_MONTHS&#x60; - must be between 1 and 2 * &#x60;TIME_UNIT_WEEKS&#x60; - must be between 1 and 4 * &#x60;TIME_UNIT_DAYS&#x60; - must be between 1 and 6 * &#x60;TIME_UNIT_HOURS&#x60; - must be between 1 and 23 * &#x60;TIME_UNIT_MINUTES&#x60; - must be between 1 and 59 | [optional] 
**unlimited** | **bool** | Whether unlimited frequency capping is applied. When this field is set to &#x60;true&#x60;, the remaining frequency cap fields are not applicable. | [optional] 

## Example

```python
from openapi_client.models.frequency_cap import FrequencyCap

# TODO update the JSON string below
json = "{}"
# create an instance of FrequencyCap from a JSON string
frequency_cap_instance = FrequencyCap.from_json(json)
# print the JSON string representation of the object
print(FrequencyCap.to_json())

# convert the object into a dict
frequency_cap_dict = frequency_cap_instance.to_dict()
# create an instance of FrequencyCap from a dict
frequency_cap_from_dict = FrequencyCap.from_dict(frequency_cap_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


