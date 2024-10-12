# PublicIPPrefixListResult

Response for ListPublicIpPrefixes API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[PublicIPPrefix]**](PublicIPPrefix.md) | A list of public IP prefixes that exists in a resource group. | [optional] 

## Example

```python
from openapi_client.models.public_ip_prefix_list_result import PublicIPPrefixListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PublicIPPrefixListResult from a JSON string
public_ip_prefix_list_result_instance = PublicIPPrefixListResult.from_json(json)
# print the JSON string representation of the object
print(PublicIPPrefixListResult.to_json())

# convert the object into a dict
public_ip_prefix_list_result_dict = public_ip_prefix_list_result_instance.to_dict()
# create an instance of PublicIPPrefixListResult from a dict
public_ip_prefix_list_result_from_dict = PublicIPPrefixListResult.from_dict(public_ip_prefix_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


