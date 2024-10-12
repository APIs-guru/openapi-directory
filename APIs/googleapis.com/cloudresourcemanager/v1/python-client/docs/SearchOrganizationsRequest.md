# SearchOrganizationsRequest

The request sent to the `SearchOrganizations` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | An optional query string used to filter the Organizations to return in the response. Filter rules are case-insensitive. Organizations may be filtered by &#x60;owner.directoryCustomerId&#x60; or by &#x60;domain&#x60;, where the domain is a G Suite domain, for example: * Filter &#x60;owner.directorycustomerid:123456789&#x60; returns Organization resources with &#x60;owner.directory_customer_id&#x60; equal to &#x60;123456789&#x60;. * Filter &#x60;domain:google.com&#x60; returns Organization resources corresponding to the domain &#x60;google.com&#x60;. This field is optional. | [optional] 
**page_size** | **int** | The maximum number of Organizations to return in the response. The server can return fewer organizations than requested. If unspecified, server picks an appropriate default. | [optional] 
**page_token** | **str** | A pagination token returned from a previous call to &#x60;SearchOrganizations&#x60; that indicates from where listing should continue. This field is optional. | [optional] 

## Example

```python
from openapi_client.models.search_organizations_request import SearchOrganizationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchOrganizationsRequest from a JSON string
search_organizations_request_instance = SearchOrganizationsRequest.from_json(json)
# print the JSON string representation of the object
print(SearchOrganizationsRequest.to_json())

# convert the object into a dict
search_organizations_request_dict = search_organizations_request_instance.to_dict()
# create an instance of SearchOrganizationsRequest from a dict
search_organizations_request_from_dict = SearchOrganizationsRequest.from_dict(search_organizations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


