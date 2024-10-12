# ListUsableSubnetworksResponse

ListUsableSubnetworksResponse is the response of ListUsableSubnetworksRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | This token allows you to get the next page of results for list requests. If the number of results is larger than &#x60;page_size&#x60;, use the &#x60;next_page_token&#x60; as a value for the query parameter &#x60;page_token&#x60; in the next request. The value will become empty when there are no more pages. | [optional] 
**subnetworks** | [**List[UsableSubnetwork]**](UsableSubnetwork.md) | A list of usable subnetworks in the specified network project. | [optional] 

## Example

```python
from openapi_client.models.list_usable_subnetworks_response import ListUsableSubnetworksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUsableSubnetworksResponse from a JSON string
list_usable_subnetworks_response_instance = ListUsableSubnetworksResponse.from_json(json)
# print the JSON string representation of the object
print(ListUsableSubnetworksResponse.to_json())

# convert the object into a dict
list_usable_subnetworks_response_dict = list_usable_subnetworks_response_instance.to_dict()
# create an instance of ListUsableSubnetworksResponse from a dict
list_usable_subnetworks_response_from_dict = ListUsableSubnetworksResponse.from_dict(list_usable_subnetworks_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


