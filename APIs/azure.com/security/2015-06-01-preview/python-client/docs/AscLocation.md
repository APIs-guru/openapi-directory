# AscLocation

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
from openapi_client.models.asc_location import AscLocation

# TODO update the JSON string below
json = "{}"
# create an instance of AscLocation from a JSON string
asc_location_instance = AscLocation.from_json(json)
# print the JSON string representation of the object
print(AscLocation.to_json())

# convert the object into a dict
asc_location_dict = asc_location_instance.to_dict()
# create an instance of AscLocation from a dict
asc_location_from_dict = AscLocation.from_dict(asc_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


