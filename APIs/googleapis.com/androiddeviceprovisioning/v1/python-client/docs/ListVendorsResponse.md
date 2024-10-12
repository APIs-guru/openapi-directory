# ListVendorsResponse

Response message to list vendors of the partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Omitted if no further results are available. | [optional] 
**total_size** | **int** | The total count of items in the list irrespective of pagination. | [optional] 
**vendors** | [**List[Company]**](Company.md) | List of vendors of the reseller partner. Fields &#x60;name&#x60;, &#x60;companyId&#x60; and &#x60;companyName&#x60; are populated to the Company object. | [optional] 

## Example

```python
from openapi_client.models.list_vendors_response import ListVendorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListVendorsResponse from a JSON string
list_vendors_response_instance = ListVendorsResponse.from_json(json)
# print the JSON string representation of the object
print(ListVendorsResponse.to_json())

# convert the object into a dict
list_vendors_response_dict = list_vendors_response_instance.to_dict()
# create an instance of ListVendorsResponse from a dict
list_vendors_response_from_dict = ListVendorsResponse.from_dict(list_vendors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


