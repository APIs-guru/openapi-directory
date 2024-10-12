# GetIssueCounts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[GetIssueCounts200ResponseResultsInner]**](GetIssueCounts200ResponseResultsInner.md) | A list of issue counts by day | 

## Example

```python
from openapi_client.models.get_issue_counts200_response import GetIssueCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetIssueCounts200Response from a JSON string
get_issue_counts200_response_instance = GetIssueCounts200Response.from_json(json)
# print the JSON string representation of the object
print(GetIssueCounts200Response.to_json())

# convert the object into a dict
get_issue_counts200_response_dict = get_issue_counts200_response_instance.to_dict()
# create an instance of GetIssueCounts200Response from a dict
get_issue_counts200_response_from_dict = GetIssueCounts200Response.from_dict(get_issue_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


