# LineItemFlight

Settings that control the active duration of a line item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**flight_date_type** | **str** | Required. The type of the line item&#39;s flight dates. | [optional] 

## Example

```python
from openapi_client.models.line_item_flight import LineItemFlight

# TODO update the JSON string below
json = "{}"
# create an instance of LineItemFlight from a JSON string
line_item_flight_instance = LineItemFlight.from_json(json)
# print the JSON string representation of the object
print(LineItemFlight.to_json())

# convert the object into a dict
line_item_flight_dict = line_item_flight_instance.to_dict()
# create an instance of LineItemFlight from a dict
line_item_flight_from_dict = LineItemFlight.from_dict(line_item_flight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


