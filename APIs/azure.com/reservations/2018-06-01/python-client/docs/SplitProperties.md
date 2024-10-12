# SplitProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantities** | **List[int]** | List of the quantities in the new reservations to create. | [optional] 
**reservation_id** | **str** | Resource id of the reservation to be split. Format of the resource id should be /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId} | [optional] 

## Example

```python
from openapi_client.models.split_properties import SplitProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SplitProperties from a JSON string
split_properties_instance = SplitProperties.from_json(json)
# print the JSON string representation of the object
print(SplitProperties.to_json())

# convert the object into a dict
split_properties_dict = split_properties_instance.to_dict()
# create an instance of SplitProperties from a dict
split_properties_from_dict = SplitProperties.from_dict(split_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


