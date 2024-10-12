# ListSubnetsResponse

Response message for VmwareEngine.ListSubnets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**subnets** | [**List[Subnet]**](Subnet.md) | A list of subnets. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached when making an aggregated query using wildcards. | [optional] 

## Example

```python
from openapi_client.models.list_subnets_response import ListSubnetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSubnetsResponse from a JSON string
list_subnets_response_instance = ListSubnetsResponse.from_json(json)
# print the JSON string representation of the object
print(ListSubnetsResponse.to_json())

# convert the object into a dict
list_subnets_response_dict = list_subnets_response_instance.to_dict()
# create an instance of ListSubnetsResponse from a dict
list_subnets_response_from_dict = ListSubnetsResponse.from_dict(list_subnets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


