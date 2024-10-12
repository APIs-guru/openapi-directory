# WebAppsListPublishingCredentials200ResponseProperties

User resource specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publishing_password** | **str** | Password used for publishing. | [optional] 
**publishing_password_hash** | **str** | Password hash used for publishing. | [optional] 
**publishing_password_hash_salt** | **str** | Password hash salt used for publishing. | [optional] 
**publishing_user_name** | **str** | Username used for publishing. | 
**scm_uri** | **str** | Url of SCM site. | [optional] 

## Example

```python
from openapi_client.models.web_apps_list_publishing_credentials200_response_properties import WebAppsListPublishingCredentials200ResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsListPublishingCredentials200ResponseProperties from a JSON string
web_apps_list_publishing_credentials200_response_properties_instance = WebAppsListPublishingCredentials200ResponseProperties.from_json(json)
# print the JSON string representation of the object
print(WebAppsListPublishingCredentials200ResponseProperties.to_json())

# convert the object into a dict
web_apps_list_publishing_credentials200_response_properties_dict = web_apps_list_publishing_credentials200_response_properties_instance.to_dict()
# create an instance of WebAppsListPublishingCredentials200ResponseProperties from a dict
web_apps_list_publishing_credentials200_response_properties_from_dict = WebAppsListPublishingCredentials200ResponseProperties.from_dict(web_apps_list_publishing_credentials200_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


