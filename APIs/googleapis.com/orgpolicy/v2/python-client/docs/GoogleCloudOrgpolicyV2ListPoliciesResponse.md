# GoogleCloudOrgpolicyV2ListPoliciesResponse

The response returned from the ListPolicies method. It will be empty if no policies are set on the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token. | [optional] 
**policies** | [**List[GoogleCloudOrgpolicyV2Policy]**](GoogleCloudOrgpolicyV2Policy.md) | All policies that exist on the resource. It will be empty if no policies are set. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_orgpolicy_v2_list_policies_response import GoogleCloudOrgpolicyV2ListPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudOrgpolicyV2ListPoliciesResponse from a JSON string
google_cloud_orgpolicy_v2_list_policies_response_instance = GoogleCloudOrgpolicyV2ListPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudOrgpolicyV2ListPoliciesResponse.to_json())

# convert the object into a dict
google_cloud_orgpolicy_v2_list_policies_response_dict = google_cloud_orgpolicy_v2_list_policies_response_instance.to_dict()
# create an instance of GoogleCloudOrgpolicyV2ListPoliciesResponse from a dict
google_cloud_orgpolicy_v2_list_policies_response_from_dict = GoogleCloudOrgpolicyV2ListPoliciesResponse.from_dict(google_cloud_orgpolicy_v2_list_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


