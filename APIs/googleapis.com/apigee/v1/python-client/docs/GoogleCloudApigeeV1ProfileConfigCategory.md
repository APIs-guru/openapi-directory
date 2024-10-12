# GoogleCloudApigeeV1ProfileConfigCategory

Advanced API Security provides security profile that scores the following categories.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abuse** | **object** | Checks for abuse, which includes any requests sent to the API for purposes other than what it is intended for, such as high volumes of requests, data scraping, and abuse related to authorization. | [optional] 
**authorization** | **object** | By default, following policies will be included: - JWS - JWT - OAuth - BasicAuth - APIKey | [optional] 
**cors** | **object** | Checks to see if you have CORS policy in place. | [optional] 
**mediation** | **object** | By default, following policies will be included: - OASValidation - SOAPMessageValidation | [optional] 
**mtls** | **object** | Checks to see if you have configured mTLS for the target server. | [optional] 
**threat** | **object** | By default, following policies will be included: - XMLThreatProtection - JSONThreatProtection | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_profile_config_category import GoogleCloudApigeeV1ProfileConfigCategory

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ProfileConfigCategory from a JSON string
google_cloud_apigee_v1_profile_config_category_instance = GoogleCloudApigeeV1ProfileConfigCategory.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ProfileConfigCategory.to_json())

# convert the object into a dict
google_cloud_apigee_v1_profile_config_category_dict = google_cloud_apigee_v1_profile_config_category_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ProfileConfigCategory from a dict
google_cloud_apigee_v1_profile_config_category_from_dict = GoogleCloudApigeeV1ProfileConfigCategory.from_dict(google_cloud_apigee_v1_profile_config_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


