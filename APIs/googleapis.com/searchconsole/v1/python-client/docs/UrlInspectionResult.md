# UrlInspectionResult

URL inspection result, including all inspection results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amp_result** | [**AmpInspectionResult**](AmpInspectionResult.md) |  | [optional] 
**index_status_result** | [**IndexStatusInspectionResult**](IndexStatusInspectionResult.md) |  | [optional] 
**inspection_result_link** | **str** | Link to Search Console URL inspection. | [optional] 
**mobile_usability_result** | [**MobileUsabilityInspectionResult**](MobileUsabilityInspectionResult.md) |  | [optional] 
**rich_results_result** | [**RichResultsInspectionResult**](RichResultsInspectionResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.url_inspection_result import UrlInspectionResult

# TODO update the JSON string below
json = "{}"
# create an instance of UrlInspectionResult from a JSON string
url_inspection_result_instance = UrlInspectionResult.from_json(json)
# print the JSON string representation of the object
print(UrlInspectionResult.to_json())

# convert the object into a dict
url_inspection_result_dict = url_inspection_result_instance.to_dict()
# create an instance of UrlInspectionResult from a dict
url_inspection_result_from_dict = UrlInspectionResult.from_dict(url_inspection_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


