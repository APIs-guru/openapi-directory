# ViewsFromUnit

Views available from the guest unit itself.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beach_view** | **bool** | Beach view. A guestroom that features a window through which guests can see the beach. | [optional] 
**beach_view_exception** | **str** | Beach view exception. | [optional] 
**city_view** | **bool** | City view. A guestroom that features a window through which guests can see the buildings, parks and/or streets of the city. | [optional] 
**city_view_exception** | **str** | City view exception. | [optional] 
**garden_view** | **bool** | Garden view. A guestroom that features a window through which guests can see a garden. | [optional] 
**garden_view_exception** | **str** | Garden view exception. | [optional] 
**lake_view** | **bool** | Lake view. | [optional] 
**lake_view_exception** | **str** | Lake view exception. | [optional] 
**landmark_view** | **bool** | Landmark view. A guestroom that features a window through which guests can see a landmark such as the countryside, a golf course, the forest, a park, a rain forst, a mountain or a slope. | [optional] 
**landmark_view_exception** | **str** | Landmark view exception. | [optional] 
**ocean_view** | **bool** | Ocean view. A guestroom that features a window through which guests can see the ocean. | [optional] 
**ocean_view_exception** | **str** | Ocean view exception. | [optional] 
**pool_view** | **bool** | Pool view. A guestroom that features a window through which guests can see the hotel&#39;s swimming pool. | [optional] 
**pool_view_exception** | **str** | Pool view exception. | [optional] 
**valley_view** | **bool** | Valley view. A guestroom that features a window through which guests can see over a valley. | [optional] 
**valley_view_exception** | **str** | Valley view exception. | [optional] 

## Example

```python
from openapi_client.models.views_from_unit import ViewsFromUnit

# TODO update the JSON string below
json = "{}"
# create an instance of ViewsFromUnit from a JSON string
views_from_unit_instance = ViewsFromUnit.from_json(json)
# print the JSON string representation of the object
print(ViewsFromUnit.to_json())

# convert the object into a dict
views_from_unit_dict = views_from_unit_instance.to_dict()
# create an instance of ViewsFromUnit from a dict
views_from_unit_from_dict = ViewsFromUnit.from_dict(views_from_unit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


