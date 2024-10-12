# EvaluateUserConsentsRequest

Evaluate a user's Consents for all matching User data mappings. Note: User data mappings are indexed asynchronously, causing slight delays between the time mappings are created or updated and when they are included in EvaluateUserConsents results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_list** | [**ConsentList**](ConsentList.md) |  | [optional] 
**page_size** | **int** | Optional. Limit on the number of User data mappings to return in a single response. If not specified, 100 is used. May not be larger than 1000. | [optional] 
**page_token** | **str** | Optional. Token to retrieve the next page of results, or empty to get the first page. | [optional] 
**request_attributes** | **Dict[str, str]** | Required. The values of request attributes associated with this access request. | [optional] 
**resource_attributes** | **Dict[str, str]** | Optional. The values of resource attributes associated with the resources being requested. If no values are specified, then all resources are queried. | [optional] 
**response_view** | **str** | Optional. The view for EvaluateUserConsentsResponse. If unspecified, defaults to &#x60;BASIC&#x60; and returns &#x60;consented&#x60; as &#x60;TRUE&#x60; or &#x60;FALSE&#x60;. | [optional] 
**user_id** | **str** | Required. User ID to evaluate consents for. | [optional] 

## Example

```python
from openapi_client.models.evaluate_user_consents_request import EvaluateUserConsentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EvaluateUserConsentsRequest from a JSON string
evaluate_user_consents_request_instance = EvaluateUserConsentsRequest.from_json(json)
# print the JSON string representation of the object
print(EvaluateUserConsentsRequest.to_json())

# convert the object into a dict
evaluate_user_consents_request_dict = evaluate_user_consents_request_instance.to_dict()
# create an instance of EvaluateUserConsentsRequest from a dict
evaluate_user_consents_request_from_dict = EvaluateUserConsentsRequest.from_dict(evaluate_user_consents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


