# ListTenantsResponse

The List tenants response object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**ResponseMetadata**](ResponseMetadata.md) |  | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. | [optional] 
**tenants** | [**List[Tenant]**](Tenant.md) | Tenants for the current client. | [optional] 

## Example

```python
from openapi_client.models.list_tenants_response import ListTenantsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTenantsResponse from a JSON string
list_tenants_response_instance = ListTenantsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTenantsResponse.to_json())

# convert the object into a dict
list_tenants_response_dict = list_tenants_response_instance.to_dict()
# create an instance of ListTenantsResponse from a dict
list_tenants_response_from_dict = ListTenantsResponse.from_dict(list_tenants_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


