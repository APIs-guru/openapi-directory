# LocationList

A list of locations used for targeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | Required. Immutable. The unique ID of the advertiser the location list belongs to. | [optional] 
**display_name** | **str** | Required. The display name of the location list. Must be UTF-8 encoded with a maximum size of 240 bytes. | [optional] 
**location_list_id** | **str** | Output only. The unique ID of the location list. Assigned by the system. | [optional] [readonly] 
**location_type** | **str** | Required. Immutable. The type of location. All locations in the list will share this type. | [optional] 
**name** | **str** | Output only. The resource name of the location list. | [optional] [readonly] 

## Example

```python
from openapi_client.models.location_list import LocationList

# TODO update the JSON string below
json = "{}"
# create an instance of LocationList from a JSON string
location_list_instance = LocationList.from_json(json)
# print the JSON string representation of the object
print(LocationList.to_json())

# convert the object into a dict
location_list_dict = location_list_instance.to_dict()
# create an instance of LocationList from a dict
location_list_from_dict = LocationList.from_dict(location_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


