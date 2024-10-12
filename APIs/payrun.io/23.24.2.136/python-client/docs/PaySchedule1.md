# PaySchedule1

The employees' pay schedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The links&#39; href | [optional] 
**rel** | **str** | The links&#39; target type | [optional] 
**title** | **str** | The links&#39; title | [optional] 

## Example

```python
from openapi_client.models.pay_schedule1 import PaySchedule1

# TODO update the JSON string below
json = "{}"
# create an instance of PaySchedule1 from a JSON string
pay_schedule1_instance = PaySchedule1.from_json(json)
# print the JSON string representation of the object
print(PaySchedule1.to_json())

# convert the object into a dict
pay_schedule1_dict = pay_schedule1_instance.to_dict()
# create an instance of PaySchedule1 from a dict
pay_schedule1_from_dict = PaySchedule1.from_dict(pay_schedule1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


