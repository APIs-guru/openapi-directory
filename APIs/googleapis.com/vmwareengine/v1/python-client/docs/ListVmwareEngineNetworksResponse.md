# ListVmwareEngineNetworksResponse

Response message for VmwareEngine.ListVmwareEngineNetworks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Unreachable resources. | [optional] 
**vmware_engine_networks** | [**List[VmwareEngineNetwork]**](VmwareEngineNetwork.md) | A list of VMware Engine networks. | [optional] 

## Example

```python
from openapi_client.models.list_vmware_engine_networks_response import ListVmwareEngineNetworksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListVmwareEngineNetworksResponse from a JSON string
list_vmware_engine_networks_response_instance = ListVmwareEngineNetworksResponse.from_json(json)
# print the JSON string representation of the object
print(ListVmwareEngineNetworksResponse.to_json())

# convert the object into a dict
list_vmware_engine_networks_response_dict = list_vmware_engine_networks_response_instance.to_dict()
# create an instance of ListVmwareEngineNetworksResponse from a dict
list_vmware_engine_networks_response_from_dict = ListVmwareEngineNetworksResponse.from_dict(list_vmware_engine_networks_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


