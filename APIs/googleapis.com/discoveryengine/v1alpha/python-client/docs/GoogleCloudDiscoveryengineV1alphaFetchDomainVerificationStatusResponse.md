# GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse

Response message for SiteSearchEngineService.FetchDomainVerificationStatus method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**target_sites** | [**List[GoogleCloudDiscoveryengineV1alphaTargetSite]**](GoogleCloudDiscoveryengineV1alphaTargetSite.md) | List of TargetSites containing the site verification status. | [optional] 
**total_size** | **int** | The total number of items matching the request. This will always be populated in the response. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_fetch_domain_verification_status_response import GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse from a JSON string
google_cloud_discoveryengine_v1alpha_fetch_domain_verification_status_response_instance = GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_fetch_domain_verification_status_response_dict = google_cloud_discoveryengine_v1alpha_fetch_domain_verification_status_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse from a dict
google_cloud_discoveryengine_v1alpha_fetch_domain_verification_status_response_from_dict = GoogleCloudDiscoveryengineV1alphaFetchDomainVerificationStatusResponse.from_dict(google_cloud_discoveryengine_v1alpha_fetch_domain_verification_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


