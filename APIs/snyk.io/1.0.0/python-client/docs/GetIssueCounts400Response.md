# GetIssueCounts400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **float** | The error response code | 
**error** | [**GetIssueCounts400ResponseError**](GetIssueCounts400ResponseError.md) |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.get_issue_counts400_response import GetIssueCounts400Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetIssueCounts400Response from a JSON string
get_issue_counts400_response_instance = GetIssueCounts400Response.from_json(json)
# print the JSON string representation of the object
print(GetIssueCounts400Response.to_json())

# convert the object into a dict
get_issue_counts400_response_dict = get_issue_counts400_response_instance.to_dict()
# create an instance of GetIssueCounts400Response from a dict
get_issue_counts400_response_from_dict = GetIssueCounts400Response.from_dict(get_issue_counts400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


