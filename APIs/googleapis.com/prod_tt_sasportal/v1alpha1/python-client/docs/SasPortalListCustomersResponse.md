# SasPortalListCustomersResponse

Response for `ListCustomers`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customers** | [**List[SasPortalCustomer]**](SasPortalCustomer.md) | The list of customers that match the request. | [optional] 
**next_page_token** | **str** | A pagination token returned from a previous call to ListCustomers that indicates from where listing should continue. If the field is missing or empty, it means there are no more customers. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_list_customers_response import SasPortalListCustomersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalListCustomersResponse from a JSON string
sas_portal_list_customers_response_instance = SasPortalListCustomersResponse.from_json(json)
# print the JSON string representation of the object
print(SasPortalListCustomersResponse.to_json())

# convert the object into a dict
sas_portal_list_customers_response_dict = sas_portal_list_customers_response_instance.to_dict()
# create an instance of SasPortalListCustomersResponse from a dict
sas_portal_list_customers_response_from_dict = SasPortalListCustomersResponse.from_dict(sas_portal_list_customers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


