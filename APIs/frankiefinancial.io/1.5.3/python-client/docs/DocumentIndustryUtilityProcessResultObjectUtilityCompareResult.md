# DocumentIndustryUtilityProcessResultObjectUtilityCompareResult

The utility comparison service can return either an error response or a result.  One of error or result will be returned in this case, the other will either be a nil value, or not supplied. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ComparisonError**](ComparisonError.md) |  | [optional] 
**result** | [**ComparisonResponse**](ComparisonResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.document_industry_utility_process_result_object_utility_compare_result import DocumentIndustryUtilityProcessResultObjectUtilityCompareResult

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentIndustryUtilityProcessResultObjectUtilityCompareResult from a JSON string
document_industry_utility_process_result_object_utility_compare_result_instance = DocumentIndustryUtilityProcessResultObjectUtilityCompareResult.from_json(json)
# print the JSON string representation of the object
print(DocumentIndustryUtilityProcessResultObjectUtilityCompareResult.to_json())

# convert the object into a dict
document_industry_utility_process_result_object_utility_compare_result_dict = document_industry_utility_process_result_object_utility_compare_result_instance.to_dict()
# create an instance of DocumentIndustryUtilityProcessResultObjectUtilityCompareResult from a dict
document_industry_utility_process_result_object_utility_compare_result_from_dict = DocumentIndustryUtilityProcessResultObjectUtilityCompareResult.from_dict(document_industry_utility_process_result_object_utility_compare_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


