# ReservationSummary

reservation summary resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ReservationSummaryProperties**](ReservationSummaryProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.reservation_summary import ReservationSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationSummary from a JSON string
reservation_summary_instance = ReservationSummary.from_json(json)
# print the JSON string representation of the object
print(ReservationSummary.to_json())

# convert the object into a dict
reservation_summary_dict = reservation_summary_instance.to_dict()
# create an instance of ReservationSummary from a dict
reservation_summary_from_dict = ReservationSummary.from_dict(reservation_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


