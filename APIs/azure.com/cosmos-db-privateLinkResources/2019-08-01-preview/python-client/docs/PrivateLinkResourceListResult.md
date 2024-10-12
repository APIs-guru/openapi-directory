# PrivateLinkResourceListResult

A list of private link resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[PrivateLinkResource]**](PrivateLinkResource.md) | Array of private link resources | [optional] 

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


