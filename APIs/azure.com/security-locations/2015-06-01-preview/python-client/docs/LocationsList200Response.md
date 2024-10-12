# LocationsList200Response

List of locations where ASC saves your data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[LocationsList200ResponseValueInner]**](LocationsList200ResponseValueInner.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.locations_list200_response import LocationsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of LocationsList200Response from a JSON string
locations_list200_response_instance = LocationsList200Response.from_json(json)
# print the JSON string representation of the object
print(LocationsList200Response.to_json())

# convert the object into a dict
locations_list200_response_dict = locations_list200_response_instance.to_dict()
# create an instance of LocationsList200Response from a dict
locations_list200_response_from_dict = LocationsList200Response.from_dict(locations_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


