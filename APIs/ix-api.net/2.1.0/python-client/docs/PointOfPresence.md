# PointOfPresence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | **List[str]** |  | 
**facility** | **str** |  | 
**id** | **str** |  | 
**metro_area_network** | **str** |  | 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.point_of_presence import PointOfPresence

# TODO update the JSON string below
json = "{}"
# create an instance of PointOfPresence from a JSON string
point_of_presence_instance = PointOfPresence.from_json(json)
# print the JSON string representation of the object
print(PointOfPresence.to_json())

# convert the object into a dict
point_of_presence_dict = point_of_presence_instance.to_dict()
# create an instance of PointOfPresence from a dict
point_of_presence_from_dict = PointOfPresence.from_dict(point_of_presence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


