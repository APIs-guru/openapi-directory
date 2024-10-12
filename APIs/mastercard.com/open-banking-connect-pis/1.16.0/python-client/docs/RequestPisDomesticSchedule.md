# RequestPisDomesticSchedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **date** | End date for the schedule | [optional] 
**frequency** | **str** | Frequency type | 
**start_date** | **date** | Start date for the schedule | 

## Example

```python
from openapi_client.models.request_pis_domestic_schedule import RequestPisDomesticSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of RequestPisDomesticSchedule from a JSON string
request_pis_domestic_schedule_instance = RequestPisDomesticSchedule.from_json(json)
# print the JSON string representation of the object
print(RequestPisDomesticSchedule.to_json())

# convert the object into a dict
request_pis_domestic_schedule_dict = request_pis_domestic_schedule_instance.to_dict()
# create an instance of RequestPisDomesticSchedule from a dict
request_pis_domestic_schedule_from_dict = RequestPisDomesticSchedule.from_dict(request_pis_domestic_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


