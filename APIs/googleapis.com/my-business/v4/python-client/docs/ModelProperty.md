# ModelProperty

General factual information about the property's physical structure and important dates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**built_year** | **int** | Built year. The year that construction of the property was completed. | [optional] 
**built_year_exception** | **str** | Built year exception. | [optional] 
**floors_count** | **int** | Floors count. The number of stories the building has from the ground floor to the top floor that are accessible to guests. | [optional] 
**floors_count_exception** | **str** | Floors count exception. | [optional] 
**last_renovated_year** | **int** | Last renovated year. The year when the most recent renovation of the property was completed. Renovation may include all or any combination of the following: the units, the public spaces, the exterior, or the interior. | [optional] 
**last_renovated_year_exception** | **str** | Last renovated year exception. | [optional] 
**rooms_count** | **int** | Rooms count. The total number of rooms and suites bookable by guests for an overnight stay. Does not include event space, public spaces, conference rooms, fitness rooms, business centers, spa, salon, restaurants/bars, or shops. | [optional] 
**rooms_count_exception** | **str** | Rooms count exception. | [optional] 

## Example

```python
from openapi_client.models.model_property import ModelProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ModelProperty from a JSON string
model_property_instance = ModelProperty.from_json(json)
# print the JSON string representation of the object
print(ModelProperty.to_json())

# convert the object into a dict
model_property_dict = model_property_instance.to_dict()
# create an instance of ModelProperty from a dict
model_property_from_dict = ModelProperty.from_dict(model_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


