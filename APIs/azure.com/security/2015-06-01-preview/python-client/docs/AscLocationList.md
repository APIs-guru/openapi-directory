# AscLocationList

List of locations where ASC saves your data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[AscLocation]**](AscLocation.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.asc_location_list import AscLocationList

# TODO update the JSON string below
json = "{}"
# create an instance of AscLocationList from a JSON string
asc_location_list_instance = AscLocationList.from_json(json)
# print the JSON string representation of the object
print(AscLocationList.to_json())

# convert the object into a dict
asc_location_list_dict = asc_location_list_instance.to_dict()
# create an instance of AscLocationList from a dict
asc_location_list_from_dict = AscLocationList.from_dict(asc_location_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


