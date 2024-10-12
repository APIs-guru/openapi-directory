# EnterpriseChannel

Enterprise Channel resource definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EnterpriseChannelProperties**](EnterpriseChannelProperties.md) |  | [optional] 
**etag** | **str** | Entity Tag | [optional] 
**id** | **str** | Specifies the resource ID. | [optional] [readonly] 
**kind** | [**Kind**](Kind.md) |  | [optional] 
**location** | **str** | Specifies the location of the resource. | [optional] 
**name** | **str** | Specifies the name of the resource. | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Contains resource tags defined as key/value pairs. | [optional] 
**type** | **str** | Specifies the type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.enterprise_channel import EnterpriseChannel

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseChannel from a JSON string
enterprise_channel_instance = EnterpriseChannel.from_json(json)
# print the JSON string representation of the object
print(EnterpriseChannel.to_json())

# convert the object into a dict
enterprise_channel_dict = enterprise_channel_instance.to_dict()
# create an instance of EnterpriseChannel from a dict
enterprise_channel_from_dict = EnterpriseChannel.from_dict(enterprise_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


