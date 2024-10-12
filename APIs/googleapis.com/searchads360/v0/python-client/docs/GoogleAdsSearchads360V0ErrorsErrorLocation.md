# GoogleAdsSearchads360V0ErrorsErrorLocation

Describes the part of the request proto that caused the error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_path_elements** | [**List[GoogleAdsSearchads360V0ErrorsErrorLocationFieldPathElement]**](GoogleAdsSearchads360V0ErrorsErrorLocationFieldPathElement.md) | A field path that indicates which field was invalid in the request. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_errors_error_location import GoogleAdsSearchads360V0ErrorsErrorLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ErrorsErrorLocation from a JSON string
google_ads_searchads360_v0_errors_error_location_instance = GoogleAdsSearchads360V0ErrorsErrorLocation.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ErrorsErrorLocation.to_json())

# convert the object into a dict
google_ads_searchads360_v0_errors_error_location_dict = google_ads_searchads360_v0_errors_error_location_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ErrorsErrorLocation from a dict
google_ads_searchads360_v0_errors_error_location_from_dict = GoogleAdsSearchads360V0ErrorsErrorLocation.from_dict(google_ads_searchads360_v0_errors_error_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


