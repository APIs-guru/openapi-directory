# ListFindingsResponse

Response message for listing findings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**findings** | [**List[GoogleCloudSecuritycenterV1beta1Finding]**](GoogleCloudSecuritycenterV1beta1Finding.md) | Findings matching the list request. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results. | [optional] 
**read_time** | **str** | Time used for executing the list request. | [optional] 
**total_size** | **int** | The total number of findings matching the query. | [optional] 

## Example

```python
from openapi_client.models.list_findings_response import ListFindingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFindingsResponse from a JSON string
list_findings_response_instance = ListFindingsResponse.from_json(json)
# print the JSON string representation of the object
print(ListFindingsResponse.to_json())

# convert the object into a dict
list_findings_response_dict = list_findings_response_instance.to_dict()
# create an instance of ListFindingsResponse from a dict
list_findings_response_from_dict = ListFindingsResponse.from_dict(list_findings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


