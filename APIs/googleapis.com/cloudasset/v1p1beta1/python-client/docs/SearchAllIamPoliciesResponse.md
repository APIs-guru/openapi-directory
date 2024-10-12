# SearchAllIamPoliciesResponse

Search all IAM policies response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Set if there are more results than those appearing in this response; to get the next set of results, call this method again, using this value as the &#x60;page_token&#x60;. | [optional] 
**results** | [**List[IamPolicySearchResult]**](IamPolicySearchResult.md) | A list of IAM policies that match the search query. Related information such as the associated resource is returned along with the policy. | [optional] 

## Example

```python
from openapi_client.models.search_all_iam_policies_response import SearchAllIamPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchAllIamPoliciesResponse from a JSON string
search_all_iam_policies_response_instance = SearchAllIamPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(SearchAllIamPoliciesResponse.to_json())

# convert the object into a dict
search_all_iam_policies_response_dict = search_all_iam_policies_response_instance.to_dict()
# create an instance of SearchAllIamPoliciesResponse from a dict
search_all_iam_policies_response_from_dict = SearchAllIamPoliciesResponse.from_dict(search_all_iam_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


