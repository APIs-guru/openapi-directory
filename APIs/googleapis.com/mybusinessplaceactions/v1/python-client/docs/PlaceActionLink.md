# PlaceActionLink

Represents a place action link and its attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the place action link was created. | [optional] [readonly] 
**is_editable** | **bool** | Output only. Indicates whether this link can be edited by the client. | [optional] [readonly] 
**is_preferred** | **bool** | Optional. Whether this link is preferred by the merchant. Only one link can be marked as preferred per place action type at a location. If a future request marks a different link as preferred for the same place action type, then the current preferred link (if any exists) will lose its preference. | [optional] 
**name** | **str** | Optional. The resource name, in the format &#x60;locations/{location_id}/placeActionLinks/{place_action_link_id}&#x60;. The name field will only be considered in UpdatePlaceActionLink and DeletePlaceActionLink requests for updating and deleting links respectively. However, it will be ignored in CreatePlaceActionLink request, where &#x60;place_action_link_id&#x60; will be assigned by the server on successful creation of a new link and returned as part of the response. | [optional] 
**place_action_type** | **str** | Required. The type of place action that can be performed using this link. | [optional] 
**provider_type** | **str** | Output only. Specifies the provider type. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the place action link was last modified. | [optional] [readonly] 
**uri** | **str** | Required. The link uri. The same uri can be reused for different action types across different locations. However, only one place action link is allowed for each unique combination of (uri, place action type, location). | [optional] 

## Example

```python
from openapi_client.models.place_action_link import PlaceActionLink

# TODO update the JSON string below
json = "{}"
# create an instance of PlaceActionLink from a JSON string
place_action_link_instance = PlaceActionLink.from_json(json)
# print the JSON string representation of the object
print(PlaceActionLink.to_json())

# convert the object into a dict
place_action_link_dict = place_action_link_instance.to_dict()
# create an instance of PlaceActionLink from a dict
place_action_link_from_dict = PlaceActionLink.from_dict(place_action_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


