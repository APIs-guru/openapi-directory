# PlacementTargeting

Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mobile_application_targeting** | [**MobileApplicationTargeting**](MobileApplicationTargeting.md) |  | [optional] 
**uri_targeting** | [**UriTargeting**](UriTargeting.md) |  | [optional] 

## Example

```python
from openapi_client.models.placement_targeting import PlacementTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of PlacementTargeting from a JSON string
placement_targeting_instance = PlacementTargeting.from_json(json)
# print the JSON string representation of the object
print(PlacementTargeting.to_json())

# convert the object into a dict
placement_targeting_dict = placement_targeting_instance.to_dict()
# create an instance of PlacementTargeting from a dict
placement_targeting_from_dict = PlacementTargeting.from_dict(placement_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


