# HotelList

The properties in the Hotel Center account that can be managed with the Google Ads account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner_hotel_ids** | **List[str]** | Hotel IDs. | [optional] 

## Example

```python
from openapi_client.models.hotel_list import HotelList

# TODO update the JSON string below
json = "{}"
# create an instance of HotelList from a JSON string
hotel_list_instance = HotelList.from_json(json)
# print the JSON string representation of the object
print(HotelList.to_json())

# convert the object into a dict
hotel_list_dict = hotel_list_instance.to_dict()
# create an instance of HotelList from a dict
hotel_list_from_dict = HotelList.from_dict(hotel_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


