# ReservationSummaries

reservation summaries resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ReservationSummariesProperties**](ReservationSummariesProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.reservation_summaries import ReservationSummaries

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationSummaries from a JSON string
reservation_summaries_instance = ReservationSummaries.from_json(json)
# print the JSON string representation of the object
print(ReservationSummaries.to_json())

# convert the object into a dict
reservation_summaries_dict = reservation_summaries_instance.to_dict()
# create an instance of ReservationSummaries from a dict
reservation_summaries_from_dict = ReservationSummaries.from_dict(reservation_summaries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


