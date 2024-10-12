# WebAppsListDomainOwnershipIdentifiers200Response

Collection of identifiers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[WebAppsListDomainOwnershipIdentifiers200ResponseValueInner]**](WebAppsListDomainOwnershipIdentifiers200ResponseValueInner.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.web_apps_list_domain_ownership_identifiers200_response import WebAppsListDomainOwnershipIdentifiers200Response

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsListDomainOwnershipIdentifiers200Response from a JSON string
web_apps_list_domain_ownership_identifiers200_response_instance = WebAppsListDomainOwnershipIdentifiers200Response.from_json(json)
# print the JSON string representation of the object
print(WebAppsListDomainOwnershipIdentifiers200Response.to_json())

# convert the object into a dict
web_apps_list_domain_ownership_identifiers200_response_dict = web_apps_list_domain_ownership_identifiers200_response_instance.to_dict()
# create an instance of WebAppsListDomainOwnershipIdentifiers200Response from a dict
web_apps_list_domain_ownership_identifiers200_response_from_dict = WebAppsListDomainOwnershipIdentifiers200Response.from_dict(web_apps_list_domain_ownership_identifiers200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


