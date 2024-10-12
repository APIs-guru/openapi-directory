# ListHcxActivationKeysResponse

Response message for VmwareEngine.ListHcxActivationKeys

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hcx_activation_keys** | [**List[HcxActivationKey]**](HcxActivationKey.md) | List of HCX activation keys. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached when making an aggregated query using wildcards. | [optional] 

## Example

```python
from openapi_client.models.list_hcx_activation_keys_response import ListHcxActivationKeysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListHcxActivationKeysResponse from a JSON string
list_hcx_activation_keys_response_instance = ListHcxActivationKeysResponse.from_json(json)
# print the JSON string representation of the object
print(ListHcxActivationKeysResponse.to_json())

# convert the object into a dict
list_hcx_activation_keys_response_dict = list_hcx_activation_keys_response_instance.to_dict()
# create an instance of ListHcxActivationKeysResponse from a dict
list_hcx_activation_keys_response_from_dict = ListHcxActivationKeysResponse.from_dict(list_hcx_activation_keys_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


