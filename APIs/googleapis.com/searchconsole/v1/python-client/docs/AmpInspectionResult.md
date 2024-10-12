# AmpInspectionResult

AMP inspection result of the live page or the current information from Google's index, depending on whether you requested a live inspection or not.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amp_index_status_verdict** | **str** | Index status of the AMP URL. | [optional] 
**amp_url** | **str** | URL of the AMP that was inspected. If the submitted URL is a desktop page that refers to an AMP version, the AMP version will be inspected. | [optional] 
**indexing_state** | **str** | Whether or not the page blocks indexing through a noindex rule. | [optional] 
**issues** | [**List[AmpIssue]**](AmpIssue.md) | A list of zero or more AMP issues found for the inspected URL. | [optional] 
**last_crawl_time** | **str** | Last time this AMP version was crawled by Google. Absent if the URL was never crawled successfully. | [optional] 
**page_fetch_state** | **str** | Whether or not Google could fetch the AMP. | [optional] 
**robots_txt_state** | **str** | Whether or not the page is blocked to Google by a robots.txt rule. | [optional] 
**verdict** | **str** | The status of the most severe error on the page. If a page has both warnings and errors, the page status is error. Error status means the page cannot be shown in Search results. | [optional] 

## Example

```python
from openapi_client.models.amp_inspection_result import AmpInspectionResult

# TODO update the JSON string below
json = "{}"
# create an instance of AmpInspectionResult from a JSON string
amp_inspection_result_instance = AmpInspectionResult.from_json(json)
# print the JSON string representation of the object
print(AmpInspectionResult.to_json())

# convert the object into a dict
amp_inspection_result_dict = amp_inspection_result_instance.to_dict()
# create an instance of AmpInspectionResult from a dict
amp_inspection_result_from_dict = AmpInspectionResult.from_dict(amp_inspection_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


