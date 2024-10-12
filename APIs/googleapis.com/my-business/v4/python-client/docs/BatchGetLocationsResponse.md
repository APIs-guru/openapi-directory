# BatchGetLocationsResponse

Response message for Locations.BatchGetLocations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locations** | [**List[Location]**](Location.md) | A collection of locations. | [optional] 

## Example

```python
from openapi_client.models.batch_get_locations_response import BatchGetLocationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetLocationsResponse from a JSON string
batch_get_locations_response_instance = BatchGetLocationsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchGetLocationsResponse.to_json())

# convert the object into a dict
batch_get_locations_response_dict = batch_get_locations_response_instance.to_dict()
# create an instance of BatchGetLocationsResponse from a dict
batch_get_locations_response_from_dict = BatchGetLocationsResponse.from_dict(batch_get_locations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


