# GoogleCloudApigeeV1ServiceIssuersMapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_ids** | **List[str]** | List of trusted issuer email ids. | [optional] 
**service** | **str** | String indicating the Apigee service name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_service_issuers_mapping import GoogleCloudApigeeV1ServiceIssuersMapping

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ServiceIssuersMapping from a JSON string
google_cloud_apigee_v1_service_issuers_mapping_instance = GoogleCloudApigeeV1ServiceIssuersMapping.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ServiceIssuersMapping.to_json())

# convert the object into a dict
google_cloud_apigee_v1_service_issuers_mapping_dict = google_cloud_apigee_v1_service_issuers_mapping_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ServiceIssuersMapping from a dict
google_cloud_apigee_v1_service_issuers_mapping_from_dict = GoogleCloudApigeeV1ServiceIssuersMapping.from_dict(google_cloud_apigee_v1_service_issuers_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


