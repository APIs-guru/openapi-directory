# ForwardInfo

Details of the final state \"forward\" and associated resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | IP address of the target (if applicable). | [optional] 
**resource_uri** | **str** | URI of the resource that the packet is forwarded to. | [optional] 
**target** | **str** | Target type where this packet is forwarded to. | [optional] 

## Example

```python
from openapi_client.models.forward_info import ForwardInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ForwardInfo from a JSON string
forward_info_instance = ForwardInfo.from_json(json)
# print the JSON string representation of the object
print(ForwardInfo.to_json())

# convert the object into a dict
forward_info_dict = forward_info_instance.to_dict()
# create an instance of ForwardInfo from a dict
forward_info_from_dict = ForwardInfo.from_dict(forward_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


