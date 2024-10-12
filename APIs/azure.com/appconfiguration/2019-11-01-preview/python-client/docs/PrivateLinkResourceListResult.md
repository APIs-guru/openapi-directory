# PrivateLinkResourceListResult

A list of private link resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next set of paged results. | [optional] 
**value** | [**List[PrivateLinkResource]**](PrivateLinkResource.md) | The collection value. | [optional] 

## Example

```python
from openapi_client.models.private_link_resource_list_result import PrivateLinkResourceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateLinkResourceListResult from a JSON string
private_link_resource_list_result_instance = PrivateLinkResourceListResult.from_json(json)
# print the JSON string representation of the object
print(PrivateLinkResourceListResult.to_json())

# convert the object into a dict
private_link_resource_list_result_dict = private_link_resource_list_result_instance.to_dict()
# create an instance of PrivateLinkResourceListResult from a dict
private_link_resource_list_result_from_dict = PrivateLinkResourceListResult.from_dict(private_link_resource_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


