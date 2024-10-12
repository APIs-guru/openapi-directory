# GooglePrivacyDlpV2TransformationLocation

Specifies the location of a transformation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_type** | **str** | Information about the functionality of the container where this finding occurred, if available. | [optional] 
**finding_id** | **str** | For infotype transformations, link to the corresponding findings ID so that location information does not need to be duplicated. Each findings ID correlates to an entry in the findings output table, this table only gets created when users specify to save findings (add the save findings action to the request). | [optional] 
**record_transformation** | [**GooglePrivacyDlpV2RecordTransformation**](GooglePrivacyDlpV2RecordTransformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_transformation_location import GooglePrivacyDlpV2TransformationLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2TransformationLocation from a JSON string
google_privacy_dlp_v2_transformation_location_instance = GooglePrivacyDlpV2TransformationLocation.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2TransformationLocation.to_json())

# convert the object into a dict
google_privacy_dlp_v2_transformation_location_dict = google_privacy_dlp_v2_transformation_location_instance.to_dict()
# create an instance of GooglePrivacyDlpV2TransformationLocation from a dict
google_privacy_dlp_v2_transformation_location_from_dict = GooglePrivacyDlpV2TransformationLocation.from_dict(google_privacy_dlp_v2_transformation_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


