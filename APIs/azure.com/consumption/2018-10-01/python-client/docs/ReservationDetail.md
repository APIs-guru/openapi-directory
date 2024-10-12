# ReservationDetail

reservation detail resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ReservationDetailProperties**](ReservationDetailProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.reservation_detail import ReservationDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationDetail from a JSON string
reservation_detail_instance = ReservationDetail.from_json(json)
# print the JSON string representation of the object
print(ReservationDetail.to_json())

# convert the object into a dict
reservation_detail_dict = reservation_detail_instance.to_dict()
# create an instance of ReservationDetail from a dict
reservation_detail_from_dict = ReservationDetail.from_dict(reservation_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


