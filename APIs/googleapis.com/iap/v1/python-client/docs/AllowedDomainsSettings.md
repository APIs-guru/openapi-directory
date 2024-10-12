# AllowedDomainsSettings

Configuration for IAP allowed domains. Lets you to restrict access to an app and allow access to only the domains that you list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domains** | **List[str]** | List of trusted domains. | [optional] 
**enable** | **bool** | Configuration for customers to opt in for the feature. | [optional] 

## Example

```python
from openapi_client.models.allowed_domains_settings import AllowedDomainsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AllowedDomainsSettings from a JSON string
allowed_domains_settings_instance = AllowedDomainsSettings.from_json(json)
# print the JSON string representation of the object
print(AllowedDomainsSettings.to_json())

# convert the object into a dict
allowed_domains_settings_dict = allowed_domains_settings_instance.to_dict()
# create an instance of AllowedDomainsSettings from a dict
allowed_domains_settings_from_dict = AllowedDomainsSettings.from_dict(allowed_domains_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


