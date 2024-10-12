# OpenHouse

SimplyRETS Open House object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The remarks and/or description details for the open house | [optional] 
**end_time** | **datetime** | The ending date time for the open house | [optional] 
**input_id** | **object** | The MLS number for the showing agent or agent which created the OpenHouse in the MLS database.  | [optional] 
**listing** | [**Listing**](Listing.md) |  | [optional] 
**open_house_id** | **str** | The MLS number or id provided by the MLS  | [optional] 
**open_house_key** | **str** | A unique identifier for the open house which is specific to the SimplyRETS API  | [optional] 
**refreshments** | **str** | Provided | [optional] 
**start_time** | **datetime** | Start Date for the open house | [optional] 
**type** | **str** | The open house type. For example, Public or Private | [optional] 

## Example

```python
from openapi_client.models.open_house import OpenHouse

# TODO update the JSON string below
json = "{}"
# create an instance of OpenHouse from a JSON string
open_house_instance = OpenHouse.from_json(json)
# print the JSON string representation of the object
print(OpenHouse.to_json())

# convert the object into a dict
open_house_dict = open_house_instance.to_dict()
# create an instance of OpenHouse from a dict
open_house_from_dict = OpenHouse.from_dict(open_house_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


