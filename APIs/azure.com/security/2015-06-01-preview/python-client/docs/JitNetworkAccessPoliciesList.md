# JitNetworkAccessPoliciesList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[JitNetworkAccessPolicy]**](JitNetworkAccessPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.jit_network_access_policies_list import JitNetworkAccessPoliciesList

# TODO update the JSON string below
json = "{}"
# create an instance of JitNetworkAccessPoliciesList from a JSON string
jit_network_access_policies_list_instance = JitNetworkAccessPoliciesList.from_json(json)
# print the JSON string representation of the object
print(JitNetworkAccessPoliciesList.to_json())

# convert the object into a dict
jit_network_access_policies_list_dict = jit_network_access_policies_list_instance.to_dict()
# create an instance of JitNetworkAccessPoliciesList from a dict
jit_network_access_policies_list_from_dict = JitNetworkAccessPoliciesList.from_dict(jit_network_access_policies_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


