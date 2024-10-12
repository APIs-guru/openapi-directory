# LocationsListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**LocationsListDefaultResponseError**](LocationsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.locations_list_default_response import LocationsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LocationsListDefaultResponse from a JSON string
locations_list_default_response_instance = LocationsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(LocationsListDefaultResponse.to_json())

# convert the object into a dict
locations_list_default_response_dict = locations_list_default_response_instance.to_dict()
# create an instance of LocationsListDefaultResponse from a dict
locations_list_default_response_from_dict = LocationsListDefaultResponse.from_dict(locations_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


