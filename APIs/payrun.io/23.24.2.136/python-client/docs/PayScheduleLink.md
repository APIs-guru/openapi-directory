# PayScheduleLink

The employee summarys' pay schedule link

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The links&#39; href | [optional] 
**rel** | **str** | The links&#39; target type | [optional] 
**title** | **str** | The links&#39; title | [optional] 

## Example

```python
from openapi_client.models.pay_schedule_link import PayScheduleLink

# TODO update the JSON string below
json = "{}"
# create an instance of PayScheduleLink from a JSON string
pay_schedule_link_instance = PayScheduleLink.from_json(json)
# print the JSON string representation of the object
print(PayScheduleLink.to_json())

# convert the object into a dict
pay_schedule_link_dict = pay_schedule_link_instance.to_dict()
# create an instance of PayScheduleLink from a dict
pay_schedule_link_from_dict = PayScheduleLink.from_dict(pay_schedule_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


