# GoogleIamV2ListPoliciesResponse

Response message for `ListPolicies`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A page token that you can use in a ListPoliciesRequest to retrieve the next page. If this field is omitted, there are no additional pages. | [optional] 
**policies** | [**List[GoogleIamV2Policy]**](GoogleIamV2Policy.md) | Metadata for the policies that are attached to the resource. | [optional] 

## Example

```python
from openapi_client.models.google_iam_v2_list_policies_response import GoogleIamV2ListPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamV2ListPoliciesResponse from a JSON string
google_iam_v2_list_policies_response_instance = GoogleIamV2ListPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleIamV2ListPoliciesResponse.to_json())

# convert the object into a dict
google_iam_v2_list_policies_response_dict = google_iam_v2_list_policies_response_instance.to_dict()
# create an instance of GoogleIamV2ListPoliciesResponse from a dict
google_iam_v2_list_policies_response_from_dict = GoogleIamV2ListPoliciesResponse.from_dict(google_iam_v2_list_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


