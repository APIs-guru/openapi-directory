# ReservationDetails

reservation details resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ReservationDetailsProperties**](ReservationDetailsProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.reservation_details import ReservationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationDetails from a JSON string
reservation_details_instance = ReservationDetails.from_json(json)
# print the JSON string representation of the object
print(ReservationDetails.to_json())

# convert the object into a dict
reservation_details_dict = reservation_details_instance.to_dict()
# create an instance of ReservationDetails from a dict
reservation_details_from_dict = ReservationDetails.from_dict(reservation_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


