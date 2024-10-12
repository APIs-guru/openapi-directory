# DocumentIndustryUtilityProcessResultObject

Utility industry comparison process result object. Used to wrap up industry-specific resultsets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **str** | The document that was used to generate these results. | [optional] 
**industry_process** | **str** |  | [optional] 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | [optional] 
**utility_compare_result** | [**DocumentIndustryUtilityProcessResultObjectUtilityCompareResult**](DocumentIndustryUtilityProcessResultObjectUtilityCompareResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.document_industry_utility_process_result_object import DocumentIndustryUtilityProcessResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentIndustryUtilityProcessResultObject from a JSON string
document_industry_utility_process_result_object_instance = DocumentIndustryUtilityProcessResultObject.from_json(json)
# print the JSON string representation of the object
print(DocumentIndustryUtilityProcessResultObject.to_json())

# convert the object into a dict
document_industry_utility_process_result_object_dict = document_industry_utility_process_result_object_instance.to_dict()
# create an instance of DocumentIndustryUtilityProcessResultObject from a dict
document_industry_utility_process_result_object_from_dict = DocumentIndustryUtilityProcessResultObject.from_dict(document_industry_utility_process_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


