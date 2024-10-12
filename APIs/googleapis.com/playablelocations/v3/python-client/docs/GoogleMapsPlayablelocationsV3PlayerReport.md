# GoogleMapsPlayablelocationsV3PlayerReport

A report submitted by a player about a playable location that is considered inappropriate for use in the game.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | Language code (in BCP-47 format) indicating the language of the freeform description provided in &#x60;reason_details&#x60;. Examples are \&quot;en\&quot;, \&quot;en-US\&quot; or \&quot;ja-Latn\&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. | [optional] 
**location_name** | **str** | Required. The name of the playable location. | [optional] 
**reason_details** | **str** | Required. A free-form description detailing why the playable location is considered bad. | [optional] 
**reasons** | **List[str]** | Required. One or more reasons why this playable location is considered bad. | [optional] 

## Example

```python
from openapi_client.models.google_maps_playablelocations_v3_player_report import GoogleMapsPlayablelocationsV3PlayerReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlayablelocationsV3PlayerReport from a JSON string
google_maps_playablelocations_v3_player_report_instance = GoogleMapsPlayablelocationsV3PlayerReport.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlayablelocationsV3PlayerReport.to_json())

# convert the object into a dict
google_maps_playablelocations_v3_player_report_dict = google_maps_playablelocations_v3_player_report_instance.to_dict()
# create an instance of GoogleMapsPlayablelocationsV3PlayerReport from a dict
google_maps_playablelocations_v3_player_report_from_dict = GoogleMapsPlayablelocationsV3PlayerReport.from_dict(google_maps_playablelocations_v3_player_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


