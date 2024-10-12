# EntityPropertyDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id** | **float** | The entity property ID. | 
**key** | **str** | The entity property key. | 
**value** | **str** | The new value of the entity property. | 

## Example

```python
from openapi_client.models.entity_property_details import EntityPropertyDetails

# TODO update the JSON string below
json = "{}"
# create an instance of EntityPropertyDetails from a JSON string
entity_property_details_instance = EntityPropertyDetails.from_json(json)
# print the JSON string representation of the object
print(EntityPropertyDetails.to_json())

# convert the object into a dict
entity_property_details_dict = entity_property_details_instance.to_dict()
# create an instance of EntityPropertyDetails from a dict
entity_property_details_from_dict = EntityPropertyDetails.from_dict(entity_property_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


