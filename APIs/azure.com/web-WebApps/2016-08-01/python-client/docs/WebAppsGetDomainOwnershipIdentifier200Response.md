# WebAppsGetDomainOwnershipIdentifier200Response

A domain specific resource identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WebAppsListDomainOwnershipIdentifiers200ResponseValueInnerProperties**](WebAppsListDomainOwnershipIdentifiers200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_apps_get_domain_ownership_identifier200_response import WebAppsGetDomainOwnershipIdentifier200Response

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsGetDomainOwnershipIdentifier200Response from a JSON string
web_apps_get_domain_ownership_identifier200_response_instance = WebAppsGetDomainOwnershipIdentifier200Response.from_json(json)
# print the JSON string representation of the object
print(WebAppsGetDomainOwnershipIdentifier200Response.to_json())

# convert the object into a dict
web_apps_get_domain_ownership_identifier200_response_dict = web_apps_get_domain_ownership_identifier200_response_instance.to_dict()
# create an instance of WebAppsGetDomainOwnershipIdentifier200Response from a dict
web_apps_get_domain_ownership_identifier200_response_from_dict = WebAppsGetDomainOwnershipIdentifier200Response.from_dict(web_apps_get_domain_ownership_identifier200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


