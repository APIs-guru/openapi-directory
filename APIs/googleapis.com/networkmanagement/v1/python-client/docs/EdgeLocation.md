# EdgeLocation

Representation of a network edge location as per https://cloud.google.com/vpc/docs/edge-locations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metropolitan_area** | **str** | Name of the metropolitan area. | [optional] 

## Example

```python
from openapi_client.models.edge_location import EdgeLocation

# TODO update the JSON string below
json = "{}"
# create an instance of EdgeLocation from a JSON string
edge_location_instance = EdgeLocation.from_json(json)
# print the JSON string representation of the object
print(EdgeLocation.to_json())

# convert the object into a dict
edge_location_dict = edge_location_instance.to_dict()
# create an instance of EdgeLocation from a dict
edge_location_from_dict = EdgeLocation.from_dict(edge_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


