# GoogleCloudApigeeV1ListHybridIssuersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issuers** | [**List[GoogleCloudApigeeV1ServiceIssuersMapping]**](GoogleCloudApigeeV1ServiceIssuersMapping.md) | Lists of hybrid services and its trusted issuer email ids. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_hybrid_issuers_response import GoogleCloudApigeeV1ListHybridIssuersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListHybridIssuersResponse from a JSON string
google_cloud_apigee_v1_list_hybrid_issuers_response_instance = GoogleCloudApigeeV1ListHybridIssuersResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListHybridIssuersResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_hybrid_issuers_response_dict = google_cloud_apigee_v1_list_hybrid_issuers_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListHybridIssuersResponse from a dict
google_cloud_apigee_v1_list_hybrid_issuers_response_from_dict = GoogleCloudApigeeV1ListHybridIssuersResponse.from_dict(google_cloud_apigee_v1_list_hybrid_issuers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


