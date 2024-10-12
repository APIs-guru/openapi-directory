# ReturnaddressListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#returnaddressListResponse&#x60;\&quot;. | [optional] 
**next_page_token** | **str** | The token for the retrieval of the next page of addresses. | [optional] 
**resources** | [**List[ReturnAddress]**](ReturnAddress.md) |  | [optional] 

## Example

```python
from openapi_client.models.returnaddress_list_response import ReturnaddressListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnaddressListResponse from a JSON string
returnaddress_list_response_instance = ReturnaddressListResponse.from_json(json)
# print the JSON string representation of the object
print(ReturnaddressListResponse.to_json())

# convert the object into a dict
returnaddress_list_response_dict = returnaddress_list_response_instance.to_dict()
# create an instance of ReturnaddressListResponse from a dict
returnaddress_list_response_from_dict = ReturnaddressListResponse.from_dict(returnaddress_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


