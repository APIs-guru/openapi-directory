# GoogleMapsPlacesV1Place

All the information representing a Place.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility_options** | [**GoogleMapsPlacesV1PlaceAccessibilityOptions**](GoogleMapsPlacesV1PlaceAccessibilityOptions.md) |  | [optional] 
**address_components** | [**List[GoogleMapsPlacesV1PlaceAddressComponent]**](GoogleMapsPlacesV1PlaceAddressComponent.md) | Repeated components for each locality level. Note the following facts about the address_components[] array: - The array of address components may contain more components than the formatted_address. - The array does not necessarily include all the political entities that contain an address, apart from those included in the formatted_address. To retrieve all the political entities that contain a specific address, you should use reverse geocoding, passing the latitude/longitude of the address as a parameter to the request. - The format of the response is not guaranteed to remain the same between requests. In particular, the number of address_components varies based on the address requested and can change over time for the same address. A component can change position in the array. The type of the component can change. A particular component may be missing in a later response. | [optional] 
**adr_format_address** | **str** | The place&#39;s address in adr microformat: http://microformats.org/wiki/adr. | [optional] 
**allows_dogs** | **bool** | Place allows dogs. | [optional] 
**attributions** | [**List[GoogleMapsPlacesV1PlaceAttribution]**](GoogleMapsPlacesV1PlaceAttribution.md) | A set of data provider that must be shown with this result. | [optional] 
**business_status** | **str** | The business status for the place. | [optional] 
**curbside_pickup** | **bool** | Specifies if the business supports curbside pickup. | [optional] 
**current_opening_hours** | [**GoogleMapsPlacesV1PlaceOpeningHours**](GoogleMapsPlacesV1PlaceOpeningHours.md) |  | [optional] 
**current_secondary_opening_hours** | [**List[GoogleMapsPlacesV1PlaceOpeningHours]**](GoogleMapsPlacesV1PlaceOpeningHours.md) | Contains an array of entries for the next seven days including information about secondary hours of a business. Secondary hours are different from a business&#39;s main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the type subfield, which draws from a predefined list of opening hours types (such as DRIVE_THROUGH, PICKUP, or TAKEOUT) based on the types of the place. This field includes the special_days subfield of all hours, set for dates that have exceptional hours. | [optional] 
**delivery** | **bool** | Specifies if the business supports delivery. | [optional] 
**dine_in** | **bool** | Specifies if the business supports indoor or outdoor seating options. | [optional] 
**display_name** | [**GoogleTypeLocalizedText**](GoogleTypeLocalizedText.md) |  | [optional] 
**editorial_summary** | [**GoogleTypeLocalizedText**](GoogleTypeLocalizedText.md) |  | [optional] 
**ev_charge_options** | [**GoogleMapsPlacesV1EVChargeOptions**](GoogleMapsPlacesV1EVChargeOptions.md) |  | [optional] 
**formatted_address** | **str** | A full, human-readable address for this place. | [optional] 
**fuel_options** | [**GoogleMapsPlacesV1FuelOptions**](GoogleMapsPlacesV1FuelOptions.md) |  | [optional] 
**good_for_children** | **bool** | Place is good for children. | [optional] 
**good_for_groups** | **bool** | Place accommodates groups. | [optional] 
**good_for_watching_sports** | **bool** | Place is suitable for watching sports. | [optional] 
**google_maps_uri** | **str** | A URL providing more information about this place. | [optional] 
**icon_background_color** | **str** | Background color for icon_mask in hex format, e.g. #909CE1. | [optional] 
**icon_mask_base_uri** | **str** | A truncated URL to an icon mask. User can access different icon type by appending type suffix to the end (eg, \&quot;.svg\&quot; or \&quot;.png\&quot;). | [optional] 
**id** | **str** | The unique identifier of a place. | [optional] 
**international_phone_number** | **str** | A human-readable phone number for the place, in international format. | [optional] 
**live_music** | **bool** | Place provides live music. | [optional] 
**location** | [**GoogleTypeLatLng**](GoogleTypeLatLng.md) |  | [optional] 
**menu_for_children** | **bool** | Place has a children&#39;s menu. | [optional] 
**name** | **str** | This Place&#39;s resource name, in &#x60;places/{place_id}&#x60; format. Can be used to look up the Place. | [optional] 
**national_phone_number** | **str** | A human-readable phone number for the place, in national format. | [optional] 
**outdoor_seating** | **bool** | Place provides outdoor seating. | [optional] 
**parking_options** | [**GoogleMapsPlacesV1PlaceParkingOptions**](GoogleMapsPlacesV1PlaceParkingOptions.md) |  | [optional] 
**payment_options** | [**GoogleMapsPlacesV1PlacePaymentOptions**](GoogleMapsPlacesV1PlacePaymentOptions.md) |  | [optional] 
**photos** | [**List[GoogleMapsPlacesV1Photo]**](GoogleMapsPlacesV1Photo.md) | Information (including references) about photos of this place. A maximum of 10 photos can be returned. | [optional] 
**plus_code** | [**GoogleMapsPlacesV1PlacePlusCode**](GoogleMapsPlacesV1PlacePlusCode.md) |  | [optional] 
**price_level** | **str** | Price level of the place. | [optional] 
**primary_type** | **str** | The primary type of the given result. This type must one of the Places API supported types. For example, \&quot;restaurant\&quot;, \&quot;cafe\&quot;, \&quot;airport\&quot;, etc. A place can only have a single primary type. For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types | [optional] 
**primary_type_display_name** | [**GoogleTypeLocalizedText**](GoogleTypeLocalizedText.md) |  | [optional] 
**rating** | **float** | A rating between 1.0 and 5.0, based on user reviews of this place. | [optional] 
**regular_opening_hours** | [**GoogleMapsPlacesV1PlaceOpeningHours**](GoogleMapsPlacesV1PlaceOpeningHours.md) |  | [optional] 
**regular_secondary_opening_hours** | [**List[GoogleMapsPlacesV1PlaceOpeningHours]**](GoogleMapsPlacesV1PlaceOpeningHours.md) | Contains an array of entries for information about regular secondary hours of a business. Secondary hours are different from a business&#39;s main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the type subfield, which draws from a predefined list of opening hours types (such as DRIVE_THROUGH, PICKUP, or TAKEOUT) based on the types of the place. | [optional] 
**reservable** | **bool** | Specifies if the place supports reservations. | [optional] 
**restroom** | **bool** | Place has restroom. | [optional] 
**reviews** | [**List[GoogleMapsPlacesV1Review]**](GoogleMapsPlacesV1Review.md) | List of reviews about this place, sorted by relevance. A maximum of 5 reviews can be returned. | [optional] 
**serves_beer** | **bool** | Specifies if the place serves beer. | [optional] 
**serves_breakfast** | **bool** | Specifies if the place serves breakfast. | [optional] 
**serves_brunch** | **bool** | Specifies if the place serves brunch. | [optional] 
**serves_cocktails** | **bool** | Place serves cocktails. | [optional] 
**serves_coffee** | **bool** | Place serves coffee. | [optional] 
**serves_dessert** | **bool** | Place serves dessert. | [optional] 
**serves_dinner** | **bool** | Specifies if the place serves dinner. | [optional] 
**serves_lunch** | **bool** | Specifies if the place serves lunch. | [optional] 
**serves_vegetarian_food** | **bool** | Specifies if the place serves vegetarian food. | [optional] 
**serves_wine** | **bool** | Specifies if the place serves wine. | [optional] 
**short_formatted_address** | **str** | A short, human-readable address for this place. | [optional] 
**sub_destinations** | [**List[GoogleMapsPlacesV1PlaceSubDestination]**](GoogleMapsPlacesV1PlaceSubDestination.md) | A list of sub destinations related to the place. | [optional] 
**takeout** | **bool** | Specifies if the business supports takeout. | [optional] 
**types** | **List[str]** | A set of type tags for this result. For example, \&quot;political\&quot; and \&quot;locality\&quot;. For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types | [optional] 
**user_rating_count** | **int** | The total number of reviews (with or without text) for this place. | [optional] 
**utc_offset_minutes** | **int** | Number of minutes this place&#39;s timezone is currently offset from UTC. This is expressed in minutes to support timezones that are offset by fractions of an hour, e.g. X hours and 15 minutes. | [optional] 
**viewport** | [**GoogleGeoTypeViewport**](GoogleGeoTypeViewport.md) |  | [optional] 
**website_uri** | **str** | The authoritative website for this place, e.g. a business&#39; homepage. Note that for places that are part of a chain (e.g. an IKEA store), this will usually be the website for the individual store, not the overall chain. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_place import GoogleMapsPlacesV1Place

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1Place from a JSON string
google_maps_places_v1_place_instance = GoogleMapsPlacesV1Place.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1Place.to_json())

# convert the object into a dict
google_maps_places_v1_place_dict = google_maps_places_v1_place_instance.to_dict()
# create an instance of GoogleMapsPlacesV1Place from a dict
google_maps_places_v1_place_from_dict = GoogleMapsPlacesV1Place.from_dict(google_maps_places_v1_place_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


