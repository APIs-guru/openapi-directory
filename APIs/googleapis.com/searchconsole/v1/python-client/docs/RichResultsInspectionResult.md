# RichResultsInspectionResult

Rich-Results inspection result, including any rich results found at this URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_items** | [**List[DetectedItems]**](DetectedItems.md) | A list of zero or more rich results detected on this page. Rich results that cannot even be parsed due to syntactic issues will not be listed here. | [optional] 
**verdict** | **str** | High-level rich results inspection result for this URL. | [optional] 

## Example

```python
from openapi_client.models.rich_results_inspection_result import RichResultsInspectionResult

# TODO update the JSON string below
json = "{}"
# create an instance of RichResultsInspectionResult from a JSON string
rich_results_inspection_result_instance = RichResultsInspectionResult.from_json(json)
# print the JSON string representation of the object
print(RichResultsInspectionResult.to_json())

# convert the object into a dict
rich_results_inspection_result_dict = rich_results_inspection_result_instance.to_dict()
# create an instance of RichResultsInspectionResult from a dict
rich_results_inspection_result_from_dict = RichResultsInspectionResult.from_dict(rich_results_inspection_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


