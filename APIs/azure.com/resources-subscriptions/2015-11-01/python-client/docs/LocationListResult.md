# LocationListResult

Location list operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Location]**](Location.md) | Gets the locations. | [optional] 

## Example

```python
from openapi_client.models.location_list_result import LocationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of LocationListResult from a JSON string
location_list_result_instance = LocationListResult.from_json(json)
# print the JSON string representation of the object
print(LocationListResult.to_json())

# convert the object into a dict
location_list_result_dict = location_list_result_instance.to_dict()
# create an instance of LocationListResult from a dict
location_list_result_from_dict = LocationListResult.from_dict(location_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


