# PublisherProfileMobileApplication

A mobile application that contains a external app ID, name, and app store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_store** | **str** | The app store the app belongs to. | [optional] 
**external_app_id** | **str** | The external ID for the app from its app store. | [optional] 
**name** | **str** | The name of the app. | [optional] 

## Example

```python
from openapi_client.models.publisher_profile_mobile_application import PublisherProfileMobileApplication

# TODO update the JSON string below
json = "{}"
# create an instance of PublisherProfileMobileApplication from a JSON string
publisher_profile_mobile_application_instance = PublisherProfileMobileApplication.from_json(json)
# print the JSON string representation of the object
print(PublisherProfileMobileApplication.to_json())

# convert the object into a dict
publisher_profile_mobile_application_dict = publisher_profile_mobile_application_instance.to_dict()
# create an instance of PublisherProfileMobileApplication from a dict
publisher_profile_mobile_application_from_dict = PublisherProfileMobileApplication.from_dict(publisher_profile_mobile_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


