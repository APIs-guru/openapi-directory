# ListAllAggregatedIssues200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issues** | [**List[ListAllAggregatedIssues200ResponseIssuesInner]**](ListAllAggregatedIssues200ResponseIssuesInner.md) | An array of identified issues | [optional] 

## Example

```python
from openapi_client.models.list_all_aggregated_issues200_response import ListAllAggregatedIssues200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllAggregatedIssues200Response from a JSON string
list_all_aggregated_issues200_response_instance = ListAllAggregatedIssues200Response.from_json(json)
# print the JSON string representation of the object
print(ListAllAggregatedIssues200Response.to_json())

# convert the object into a dict
list_all_aggregated_issues200_response_dict = list_all_aggregated_issues200_response_instance.to_dict()
# create an instance of ListAllAggregatedIssues200Response from a dict
list_all_aggregated_issues200_response_from_dict = ListAllAggregatedIssues200Response.from_dict(list_all_aggregated_issues200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


