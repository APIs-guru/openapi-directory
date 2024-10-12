# GoogleCloudDocumentaiV1beta3ProcessOptionsIndividualPageSelector

A list of individual page numbers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pages** | **List[int]** | Optional. Indices of the pages (starting from 1). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_process_options_individual_page_selector import GoogleCloudDocumentaiV1beta3ProcessOptionsIndividualPageSelector

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ProcessOptionsIndividualPageSelector from a JSON string
google_cloud_documentai_v1beta3_process_options_individual_page_selector_instance = GoogleCloudDocumentaiV1beta3ProcessOptionsIndividualPageSelector.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ProcessOptionsIndividualPageSelector.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_process_options_individual_page_selector_dict = google_cloud_documentai_v1beta3_process_options_individual_page_selector_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ProcessOptionsIndividualPageSelector from a dict
google_cloud_documentai_v1beta3_process_options_individual_page_selector_from_dict = GoogleCloudDocumentaiV1beta3ProcessOptionsIndividualPageSelector.from_dict(google_cloud_documentai_v1beta3_process_options_individual_page_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


