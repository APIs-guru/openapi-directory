# LivingAreaLayout

Information about the layout of the living area.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balcony** | **bool** | Balcony. An outdoor platform attached to a building and surrounded by a short wall, fence or other safety railing. The balcony is accessed through a door in a guestroom or suite and is for use by the guest staying in that room. May or may not include seating or outdoor furniture. Is not located on the ground floor. Also lanai. | [optional] 
**balcony_exception** | **str** | Balcony exception. | [optional] 
**living_area_sq_meters** | **float** | Living area sq meters. The measurement in meters of the area of a guestroom&#39;s living space. | [optional] 
**living_area_sq_meters_exception** | **str** | Living area sq meters exception. | [optional] 
**loft** | **bool** | Loft. A three-walled upper area accessed by stairs or a ladder that overlooks the lower area of a room. | [optional] 
**loft_exception** | **str** | Loft exception. | [optional] 
**non_smoking** | **bool** | Non smoking. A guestroom in which the smoking of cigarettes, cigars and pipes is prohibited. | [optional] 
**non_smoking_exception** | **str** | Non smoking exception. | [optional] 
**patio** | **bool** | Patio. A paved, outdoor area with seating attached to and accessed through a ground-floor guestroom for use by the occupants of the guestroom. | [optional] 
**patio_exception** | **str** | Patio exception. | [optional] 
**stairs** | **bool** | Stairs. There are steps leading from one level or story to another in the unit. | [optional] 
**stairs_exception** | **str** | Stairs exception. | [optional] 

## Example

```python
from openapi_client.models.living_area_layout import LivingAreaLayout

# TODO update the JSON string below
json = "{}"
# create an instance of LivingAreaLayout from a JSON string
living_area_layout_instance = LivingAreaLayout.from_json(json)
# print the JSON string representation of the object
print(LivingAreaLayout.to_json())

# convert the object into a dict
living_area_layout_dict = living_area_layout_instance.to_dict()
# create an instance of LivingAreaLayout from a dict
living_area_layout_from_dict = LivingAreaLayout.from_dict(living_area_layout_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


