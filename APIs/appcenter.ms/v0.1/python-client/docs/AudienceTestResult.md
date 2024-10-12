# AudienceTestResult

Audience test result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_properties** | **Dict[str, str]** | Custom properties used in the definition. | [optional] 
**definition** | **str** | Audience definition in OData format. | [optional] 
**estimated_count** | **int** | Estimated audience size. | [optional] 
**estimated_total_count** | **int** | Estimated total audience size. | [optional] 

## Example

```python
from openapi_client.models.audience_test_result import AudienceTestResult

# TODO update the JSON string below
json = "{}"
# create an instance of AudienceTestResult from a JSON string
audience_test_result_instance = AudienceTestResult.from_json(json)
# print the JSON string representation of the object
print(AudienceTestResult.to_json())

# convert the object into a dict
audience_test_result_dict = audience_test_result_instance.to_dict()
# create an instance of AudienceTestResult from a dict
audience_test_result_from_dict = AudienceTestResult.from_dict(audience_test_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


