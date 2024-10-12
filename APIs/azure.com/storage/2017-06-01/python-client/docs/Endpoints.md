# Endpoints

The URIs that are used to perform a retrieval of a public blob, queue, or table object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob** | **str** | Gets the blob endpoint. | [optional] [readonly] 
**file** | **str** | Gets the file endpoint. | [optional] [readonly] 
**queue** | **str** | Gets the queue endpoint. | [optional] [readonly] 
**table** | **str** | Gets the table endpoint. | [optional] [readonly] 

## Example

```python
from openapi_client.models.endpoints import Endpoints

# TODO update the JSON string below
json = "{}"
# create an instance of Endpoints from a JSON string
endpoints_instance = Endpoints.from_json(json)
# print the JSON string representation of the object
print(Endpoints.to_json())

# convert the object into a dict
endpoints_dict = endpoints_instance.to_dict()
# create an instance of Endpoints from a dict
endpoints_from_dict = Endpoints.from_dict(endpoints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


