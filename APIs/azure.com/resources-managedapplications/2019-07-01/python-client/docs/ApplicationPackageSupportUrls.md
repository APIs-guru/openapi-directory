# ApplicationPackageSupportUrls

The appliance package support URLs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**government_cloud** | **str** | The government cloud support URL. | [optional] 
**public_azure** | **str** | The public azure support URL. | [optional] 

## Example

```python
from openapi_client.models.application_package_support_urls import ApplicationPackageSupportUrls

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPackageSupportUrls from a JSON string
application_package_support_urls_instance = ApplicationPackageSupportUrls.from_json(json)
# print the JSON string representation of the object
print(ApplicationPackageSupportUrls.to_json())

# convert the object into a dict
application_package_support_urls_dict = application_package_support_urls_instance.to_dict()
# create an instance of ApplicationPackageSupportUrls from a dict
application_package_support_urls_from_dict = ApplicationPackageSupportUrls.from_dict(application_package_support_urls_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


