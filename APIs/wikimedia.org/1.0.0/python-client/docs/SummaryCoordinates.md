# SummaryCoordinates

The coordinates of the item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lat** | **float** | The latitude | 
**lon** | **float** | The longitude | 

## Example

```python
from openapi_client.models.summary_coordinates import SummaryCoordinates

# TODO update the JSON string below
json = "{}"
# create an instance of SummaryCoordinates from a JSON string
summary_coordinates_instance = SummaryCoordinates.from_json(json)
# print the JSON string representation of the object
print(SummaryCoordinates.to_json())

# convert the object into a dict
summary_coordinates_dict = summary_coordinates_instance.to_dict()
# create an instance of SummaryCoordinates from a dict
summary_coordinates_from_dict = SummaryCoordinates.from_dict(summary_coordinates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


