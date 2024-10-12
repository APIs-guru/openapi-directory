# FrequencyCap

Frequency Cap.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of time, in seconds, for this frequency cap. The maximum duration is 90 days. Acceptable values are 1 to 7776000, inclusive. | [optional] 
**impressions** | **str** | Number of times an individual user can be served the ad within the specified duration. Acceptable values are 1 to 15, inclusive. | [optional] 

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


