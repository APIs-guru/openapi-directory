# PrivateLinkServiceListResult

Response for the ListPrivateLinkService API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[PrivateLinkService]**](PrivateLinkService.md) | Gets a list of PrivateLinkService resources in a resource group. | [optional] 

## Example

```python
from openapi_client.models.private_link_service_list_result import PrivateLinkServiceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateLinkServiceListResult from a JSON string
private_link_service_list_result_instance = PrivateLinkServiceListResult.from_json(json)
# print the JSON string representation of the object
print(PrivateLinkServiceListResult.to_json())

# convert the object into a dict
private_link_service_list_result_dict = private_link_service_list_result_instance.to_dict()
# create an instance of PrivateLinkServiceListResult from a dict
private_link_service_list_result_from_dict = PrivateLinkServiceListResult.from_dict(private_link_service_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


