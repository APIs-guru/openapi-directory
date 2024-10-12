# PointOfPresencePartial

Point Of Presence

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | **List[str]** |  | [optional] 
**facility** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**metro_area_network** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.point_of_presence_partial import PointOfPresencePartial

# TODO update the JSON string below
json = "{}"
# create an instance of PointOfPresencePartial from a JSON string
point_of_presence_partial_instance = PointOfPresencePartial.from_json(json)
# print the JSON string representation of the object
print(PointOfPresencePartial.to_json())

# convert the object into a dict
point_of_presence_partial_dict = point_of_presence_partial_instance.to_dict()
# create an instance of PointOfPresencePartial from a dict
point_of_presence_partial_from_dict = PointOfPresencePartial.from_dict(point_of_presence_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


