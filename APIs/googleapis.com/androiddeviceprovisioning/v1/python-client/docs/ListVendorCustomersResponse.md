# ListVendorCustomersResponse

Response message to list customers of the vendor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customers** | [**List[Company]**](Company.md) | List of customers of the vendor. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Omitted if no further results are available. | [optional] 
**total_size** | **int** | The total count of items in the list irrespective of pagination. | [optional] 

## Example

```python
from openapi_client.models.list_vendor_customers_response import ListVendorCustomersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListVendorCustomersResponse from a JSON string
list_vendor_customers_response_instance = ListVendorCustomersResponse.from_json(json)
# print the JSON string representation of the object
print(ListVendorCustomersResponse.to_json())

# convert the object into a dict
list_vendor_customers_response_dict = list_vendor_customers_response_instance.to_dict()
# create an instance of ListVendorCustomersResponse from a dict
list_vendor_customers_response_from_dict = ListVendorCustomersResponse.from_dict(list_vendor_customers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


