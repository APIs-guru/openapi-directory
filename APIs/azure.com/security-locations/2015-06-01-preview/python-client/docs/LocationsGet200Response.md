# LocationsGet200Response

The ASC location of the subscription is in the \"name\" field

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | An empty set of properties | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.locations_get200_response import LocationsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of LocationsGet200Response from a JSON string
locations_get200_response_instance = LocationsGet200Response.from_json(json)
# print the JSON string representation of the object
print(LocationsGet200Response.to_json())

# convert the object into a dict
locations_get200_response_dict = locations_get200_response_instance.to_dict()
# create an instance of LocationsGet200Response from a dict
locations_get200_response_from_dict = LocationsGet200Response.from_dict(locations_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


