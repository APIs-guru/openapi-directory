# LocationAssociation

How the media item is associated with its location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The category that this location photo belongs to. | [optional] 
**price_list_item_id** | **str** | The ID of a price list item that this location photo is associated with. | [optional] 

## Example

```python
from openapi_client.models.location_association import LocationAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of LocationAssociation from a JSON string
location_association_instance = LocationAssociation.from_json(json)
# print the JSON string representation of the object
print(LocationAssociation.to_json())

# convert the object into a dict
location_association_dict = location_association_instance.to_dict()
# create an instance of LocationAssociation from a dict
location_association_from_dict = LocationAssociation.from_dict(location_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


