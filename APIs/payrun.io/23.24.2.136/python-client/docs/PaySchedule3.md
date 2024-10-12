# PaySchedule3

The pay run job instructions' pay schedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The links&#39; href | [optional] 
**rel** | **str** | The links&#39; target type | [optional] 
**title** | **str** | The links&#39; title | [optional] 

## Example

```python
from openapi_client.models.pay_schedule3 import PaySchedule3

# TODO update the JSON string below
json = "{}"
# create an instance of PaySchedule3 from a JSON string
pay_schedule3_instance = PaySchedule3.from_json(json)
# print the JSON string representation of the object
print(PaySchedule3.to_json())

# convert the object into a dict
pay_schedule3_dict = pay_schedule3_instance.to_dict()
# create an instance of PaySchedule3 from a dict
pay_schedule3_from_dict = PaySchedule3.from_dict(pay_schedule3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


