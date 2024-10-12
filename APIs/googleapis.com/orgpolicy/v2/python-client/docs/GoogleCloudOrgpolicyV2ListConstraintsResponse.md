# GoogleCloudOrgpolicyV2ListConstraintsResponse

The response returned from the ListConstraints method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraints** | [**List[GoogleCloudOrgpolicyV2Constraint]**](GoogleCloudOrgpolicyV2Constraint.md) | The collection of constraints that are available on the targeted resource. | [optional] 
**next_page_token** | **str** | Page token used to retrieve the next page. This is currently not used. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_orgpolicy_v2_list_constraints_response import GoogleCloudOrgpolicyV2ListConstraintsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudOrgpolicyV2ListConstraintsResponse from a JSON string
google_cloud_orgpolicy_v2_list_constraints_response_instance = GoogleCloudOrgpolicyV2ListConstraintsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudOrgpolicyV2ListConstraintsResponse.to_json())

# convert the object into a dict
google_cloud_orgpolicy_v2_list_constraints_response_dict = google_cloud_orgpolicy_v2_list_constraints_response_instance.to_dict()
# create an instance of GoogleCloudOrgpolicyV2ListConstraintsResponse from a dict
google_cloud_orgpolicy_v2_list_constraints_response_from_dict = GoogleCloudOrgpolicyV2ListConstraintsResponse.from_dict(google_cloud_orgpolicy_v2_list_constraints_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


