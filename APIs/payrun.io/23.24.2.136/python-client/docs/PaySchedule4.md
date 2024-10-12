# PaySchedule4


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta_data** | **object** | The pay schedules&#39; meta data | [optional] 
**name** | **str** | The pay schedules&#39; name | [optional] 
**pay_frequency** | **str** | The pay schedules&#39; pay frequency | [optional] 

## Example

```python
from openapi_client.models.pay_schedule4 import PaySchedule4

# TODO update the JSON string below
json = "{}"
# create an instance of PaySchedule4 from a JSON string
pay_schedule4_instance = PaySchedule4.from_json(json)
# print the JSON string representation of the object
print(PaySchedule4.to_json())

# convert the object into a dict
pay_schedule4_dict = pay_schedule4_instance.to_dict()
# create an instance of PaySchedule4 from a dict
pay_schedule4_from_dict = PaySchedule4.from_dict(pay_schedule4_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


