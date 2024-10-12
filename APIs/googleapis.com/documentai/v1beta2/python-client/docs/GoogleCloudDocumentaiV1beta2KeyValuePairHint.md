# GoogleCloudDocumentaiV1beta2KeyValuePairHint

Reserved for future use.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key text for the hint. | [optional] 
**value_types** | **List[str]** | Type of the value. This is case-insensitive, and could be one of: ADDRESS, LOCATION, ORGANIZATION, PERSON, PHONE_NUMBER, ID, NUMBER, EMAIL, PRICE, TERMS, DATE, NAME. Types not in this list will be ignored. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_key_value_pair_hint import GoogleCloudDocumentaiV1beta2KeyValuePairHint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2KeyValuePairHint from a JSON string
google_cloud_documentai_v1beta2_key_value_pair_hint_instance = GoogleCloudDocumentaiV1beta2KeyValuePairHint.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2KeyValuePairHint.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_key_value_pair_hint_dict = google_cloud_documentai_v1beta2_key_value_pair_hint_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2KeyValuePairHint from a dict
google_cloud_documentai_v1beta2_key_value_pair_hint_from_dict = GoogleCloudDocumentaiV1beta2KeyValuePairHint.from_dict(google_cloud_documentai_v1beta2_key_value_pair_hint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


