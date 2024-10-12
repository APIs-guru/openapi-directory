# GoogleCloudRetailV2SearchRequestSpellCorrectionSpec

The specification for query spell correction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | The mode under which spell correction should take effect to replace the original search query. Default to Mode.AUTO. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_search_request_spell_correction_spec import GoogleCloudRetailV2SearchRequestSpellCorrectionSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2SearchRequestSpellCorrectionSpec from a JSON string
google_cloud_retail_v2_search_request_spell_correction_spec_instance = GoogleCloudRetailV2SearchRequestSpellCorrectionSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2SearchRequestSpellCorrectionSpec.to_json())

# convert the object into a dict
google_cloud_retail_v2_search_request_spell_correction_spec_dict = google_cloud_retail_v2_search_request_spell_correction_spec_instance.to_dict()
# create an instance of GoogleCloudRetailV2SearchRequestSpellCorrectionSpec from a dict
google_cloud_retail_v2_search_request_spell_correction_spec_from_dict = GoogleCloudRetailV2SearchRequestSpellCorrectionSpec.from_dict(google_cloud_retail_v2_search_request_spell_correction_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


