# DocumentIndustryUtilitySwitchResultObject

Utility industry comparison process result object. Used to wrap up industry-specific resultsets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **str** | The document that was used to generate these results. | [optional] 
**industry_process** | **str** |  | [optional] 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | [optional] 
**utility_switch_result** | [**DocumentIndustryUtilitySwitchResultObjectUtilitySwitchResult**](DocumentIndustryUtilitySwitchResultObjectUtilitySwitchResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.document_industry_utility_switch_result_object import DocumentIndustryUtilitySwitchResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentIndustryUtilitySwitchResultObject from a JSON string
document_industry_utility_switch_result_object_instance = DocumentIndustryUtilitySwitchResultObject.from_json(json)
# print the JSON string representation of the object
print(DocumentIndustryUtilitySwitchResultObject.to_json())

# convert the object into a dict
document_industry_utility_switch_result_object_dict = document_industry_utility_switch_result_object_instance.to_dict()
# create an instance of DocumentIndustryUtilitySwitchResultObject from a dict
document_industry_utility_switch_result_object_from_dict = DocumentIndustryUtilitySwitchResultObject.from_dict(document_industry_utility_switch_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


