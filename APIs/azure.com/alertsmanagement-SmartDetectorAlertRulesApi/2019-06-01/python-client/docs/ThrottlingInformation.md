# ThrottlingInformation

Optional throttling information for the alert rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | The required duration (in ISO8601 format) to wait before notifying on the alert rule again. The time granularity must be in minutes and minimum value is 0 minutes | [optional] 

## Example

```python
from openapi_client.models.throttling_information import ThrottlingInformation

# TODO update the JSON string below
json = "{}"
# create an instance of ThrottlingInformation from a JSON string
throttling_information_instance = ThrottlingInformation.from_json(json)
# print the JSON string representation of the object
print(ThrottlingInformation.to_json())

# convert the object into a dict
throttling_information_dict = throttling_information_instance.to_dict()
# create an instance of ThrottlingInformation from a dict
throttling_information_from_dict = ThrottlingInformation.from_dict(throttling_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


