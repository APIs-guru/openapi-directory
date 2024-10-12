# BatchGetLocationsRequest

Request message for Locations.BatchGetLocations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_names** | **List[str]** | A collection of locations to fetch, specified by their names. | [optional] 

## Example

```python
from openapi_client.models.batch_get_locations_request import BatchGetLocationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetLocationsRequest from a JSON string
batch_get_locations_request_instance = BatchGetLocationsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchGetLocationsRequest.to_json())

# convert the object into a dict
batch_get_locations_request_dict = batch_get_locations_request_instance.to_dict()
# create an instance of BatchGetLocationsRequest from a dict
batch_get_locations_request_from_dict = BatchGetLocationsRequest.from_dict(batch_get_locations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


