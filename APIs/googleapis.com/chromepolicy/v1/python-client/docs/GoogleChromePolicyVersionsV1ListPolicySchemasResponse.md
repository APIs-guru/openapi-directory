# GoogleChromePolicyVersionsV1ListPolicySchemasResponse

Response message for listing policy schemas that match a filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The page token used to get the next page of policy schemas. | [optional] 
**policy_schemas** | [**List[GoogleChromePolicyVersionsV1PolicySchema]**](GoogleChromePolicyVersionsV1PolicySchema.md) | The list of policy schemas that match the query. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_list_policy_schemas_response import GoogleChromePolicyVersionsV1ListPolicySchemasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1ListPolicySchemasResponse from a JSON string
google_chrome_policy_versions_v1_list_policy_schemas_response_instance = GoogleChromePolicyVersionsV1ListPolicySchemasResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1ListPolicySchemasResponse.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_list_policy_schemas_response_dict = google_chrome_policy_versions_v1_list_policy_schemas_response_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1ListPolicySchemasResponse from a dict
google_chrome_policy_versions_v1_list_policy_schemas_response_from_dict = GoogleChromePolicyVersionsV1ListPolicySchemasResponse.from_dict(google_chrome_policy_versions_v1_list_policy_schemas_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


