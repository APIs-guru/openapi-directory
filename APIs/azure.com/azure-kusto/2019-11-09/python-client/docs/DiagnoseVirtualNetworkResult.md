# DiagnoseVirtualNetworkResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**findings** | **List[str]** | The list of network connectivity diagnostic finding | [optional] 

## Example

```python
from openapi_client.models.diagnose_virtual_network_result import DiagnoseVirtualNetworkResult

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnoseVirtualNetworkResult from a JSON string
diagnose_virtual_network_result_instance = DiagnoseVirtualNetworkResult.from_json(json)
# print the JSON string representation of the object
print(DiagnoseVirtualNetworkResult.to_json())

# convert the object into a dict
diagnose_virtual_network_result_dict = diagnose_virtual_network_result_instance.to_dict()
# create an instance of DiagnoseVirtualNetworkResult from a dict
diagnose_virtual_network_result_from_dict = DiagnoseVirtualNetworkResult.from_dict(diagnose_virtual_network_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


