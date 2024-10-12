# GoogleCloudOrgpolicyV2ListCustomConstraintsResponse

The response returned from the ListCustomConstraints method. It will be empty if no custom constraints are set on the organization resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_constraints** | [**List[GoogleCloudOrgpolicyV2CustomConstraint]**](GoogleCloudOrgpolicyV2CustomConstraint.md) | All custom constraints that exist on the organization resource. It will be empty if no custom constraints are set. | [optional] 
**next_page_token** | **str** | Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_orgpolicy_v2_list_custom_constraints_response import GoogleCloudOrgpolicyV2ListCustomConstraintsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudOrgpolicyV2ListCustomConstraintsResponse from a JSON string
google_cloud_orgpolicy_v2_list_custom_constraints_response_instance = GoogleCloudOrgpolicyV2ListCustomConstraintsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudOrgpolicyV2ListCustomConstraintsResponse.to_json())

# convert the object into a dict
google_cloud_orgpolicy_v2_list_custom_constraints_response_dict = google_cloud_orgpolicy_v2_list_custom_constraints_response_instance.to_dict()
# create an instance of GoogleCloudOrgpolicyV2ListCustomConstraintsResponse from a dict
google_cloud_orgpolicy_v2_list_custom_constraints_response_from_dict = GoogleCloudOrgpolicyV2ListCustomConstraintsResponse.from_dict(google_cloud_orgpolicy_v2_list_custom_constraints_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


