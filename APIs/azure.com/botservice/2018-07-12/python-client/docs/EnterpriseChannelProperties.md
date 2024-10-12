# EnterpriseChannelProperties

The parameters to provide for the Enterprise Channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | [**List[EnterpriseChannelNode]**](EnterpriseChannelNode.md) | The nodes associated with the Enterprise Channel. | 
**state** | **str** | The current state of the Enterprise Channel. | [optional] 

## Example

```python
from openapi_client.models.enterprise_channel_properties import EnterpriseChannelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseChannelProperties from a JSON string
enterprise_channel_properties_instance = EnterpriseChannelProperties.from_json(json)
# print the JSON string representation of the object
print(EnterpriseChannelProperties.to_json())

# convert the object into a dict
enterprise_channel_properties_dict = enterprise_channel_properties_instance.to_dict()
# create an instance of EnterpriseChannelProperties from a dict
enterprise_channel_properties_from_dict = EnterpriseChannelProperties.from_dict(enterprise_channel_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


