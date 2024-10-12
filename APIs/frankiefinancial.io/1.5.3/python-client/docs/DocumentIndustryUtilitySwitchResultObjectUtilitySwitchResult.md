# DocumentIndustryUtilitySwitchResultObjectUtilitySwitchResult

The utility switching service can return either an error response or a result.  One of error or result will be returned in this case, the other will either be a nil value, or not supplied. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**SwitchError**](SwitchError.md) |  | [optional] 
**result** | [**SwitchResponse**](SwitchResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.document_industry_utility_switch_result_object_utility_switch_result import DocumentIndustryUtilitySwitchResultObjectUtilitySwitchResult

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentIndustryUtilitySwitchResultObjectUtilitySwitchResult from a JSON string
document_industry_utility_switch_result_object_utility_switch_result_instance = DocumentIndustryUtilitySwitchResultObjectUtilitySwitchResult.from_json(json)
# print the JSON string representation of the object
print(DocumentIndustryUtilitySwitchResultObjectUtilitySwitchResult.to_json())

# convert the object into a dict
document_industry_utility_switch_result_object_utility_switch_result_dict = document_industry_utility_switch_result_object_utility_switch_result_instance.to_dict()
# create an instance of DocumentIndustryUtilitySwitchResultObjectUtilitySwitchResult from a dict
document_industry_utility_switch_result_object_utility_switch_result_from_dict = DocumentIndustryUtilitySwitchResultObjectUtilitySwitchResult.from_dict(document_industry_utility_switch_result_object_utility_switch_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


