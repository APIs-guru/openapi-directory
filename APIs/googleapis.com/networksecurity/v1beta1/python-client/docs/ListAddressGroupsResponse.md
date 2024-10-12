# ListAddressGroupsResponse

Response returned by the ListAddressGroups method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_groups** | [**List[AddressGroup]**](AddressGroup.md) | List of AddressGroups resources. | [optional] 
**next_page_token** | **str** | If there might be more results than those appearing in this response, then &#x60;next_page_token&#x60; is included. To get the next set of results, call this method again using the value of &#x60;next_page_token&#x60; as &#x60;page_token&#x60;. | [optional] 

## Example

```python
from openapi_client.models.list_address_groups_response import ListAddressGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAddressGroupsResponse from a JSON string
list_address_groups_response_instance = ListAddressGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAddressGroupsResponse.to_json())

# convert the object into a dict
list_address_groups_response_dict = list_address_groups_response_instance.to_dict()
# create an instance of ListAddressGroupsResponse from a dict
list_address_groups_response_from_dict = ListAddressGroupsResponse.from_dict(list_address_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


