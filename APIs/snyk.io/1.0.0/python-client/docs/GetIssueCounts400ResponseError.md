# GetIssueCounts400ResponseError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inner_errors** | **List[object]** | A list of additional reasons why the error occurred | [optional] 
**name** | **str** | A descriptive message of the error | 

## Example

```python
from openapi_client.models.get_issue_counts400_response_error import GetIssueCounts400ResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of GetIssueCounts400ResponseError from a JSON string
get_issue_counts400_response_error_instance = GetIssueCounts400ResponseError.from_json(json)
# print the JSON string representation of the object
print(GetIssueCounts400ResponseError.to_json())

# convert the object into a dict
get_issue_counts400_response_error_dict = get_issue_counts400_response_error_instance.to_dict()
# create an instance of GetIssueCounts400ResponseError from a dict
get_issue_counts400_response_error_from_dict = GetIssueCounts400ResponseError.from_dict(get_issue_counts400_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


