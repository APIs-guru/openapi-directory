# DcimFrontPortsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[FrontPort]**](FrontPort.md) |  | 

## Example

```python
from openapi_client.models.dcim_front_ports_list200_response import DcimFrontPortsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DcimFrontPortsList200Response from a JSON string
dcim_front_ports_list200_response_instance = DcimFrontPortsList200Response.from_json(json)
# print the JSON string representation of the object
print(DcimFrontPortsList200Response.to_json())

# convert the object into a dict
dcim_front_ports_list200_response_dict = dcim_front_ports_list200_response_instance.to_dict()
# create an instance of DcimFrontPortsList200Response from a dict
dcim_front_ports_list200_response_from_dict = DcimFrontPortsList200Response.from_dict(dcim_front_ports_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


