# DcimInterfacesList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[Interface]**](Interface.md) |  | 

## Example

```python
from openapi_client.models.dcim_interfaces_list200_response import DcimInterfacesList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DcimInterfacesList200Response from a JSON string
dcim_interfaces_list200_response_instance = DcimInterfacesList200Response.from_json(json)
# print the JSON string representation of the object
print(DcimInterfacesList200Response.to_json())

# convert the object into a dict
dcim_interfaces_list200_response_dict = dcim_interfaces_list200_response_instance.to_dict()
# create an instance of DcimInterfacesList200Response from a dict
dcim_interfaces_list200_response_from_dict = DcimInterfacesList200Response.from_dict(dcim_interfaces_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


