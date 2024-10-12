# HolidayCutoff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deadline_date** | **str** | Date of the order deadline, in ISO 8601 format. E.g. \&quot;2016-11-29\&quot; for 29th November 2016. Required. | [optional] 
**deadline_hour** | **int** | Hour of the day on the deadline date until which the order has to be placed to qualify for the delivery guarantee. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Required. | [optional] 
**deadline_timezone** | **str** | Timezone identifier for the deadline hour. A list of identifiers can be found in the AdWords API documentation. E.g. \&quot;Europe/Zurich\&quot;. Required. | [optional] 
**holiday_id** | **str** | Unique identifier for the holiday. Required. | [optional] 
**visible_from_date** | **str** | Date on which the deadline will become visible to consumers in ISO 8601 format. E.g. \&quot;2016-10-31\&quot; for 31st October 2016. Required. | [optional] 

## Example

```python
from openapi_client.models.holiday_cutoff import HolidayCutoff

# TODO update the JSON string below
json = "{}"
# create an instance of HolidayCutoff from a JSON string
holiday_cutoff_instance = HolidayCutoff.from_json(json)
# print the JSON string representation of the object
print(HolidayCutoff.to_json())

# convert the object into a dict
holiday_cutoff_dict = holiday_cutoff_instance.to_dict()
# create an instance of HolidayCutoff from a dict
holiday_cutoff_from_dict = HolidayCutoff.from_dict(holiday_cutoff_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


