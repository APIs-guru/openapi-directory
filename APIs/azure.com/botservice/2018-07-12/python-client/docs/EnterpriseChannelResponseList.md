# EnterpriseChannelResponseList

The list of  bot service operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of bot service resources. | [optional] 
**value** | [**List[EnterpriseChannel]**](EnterpriseChannel.md) | The list of Enterprise Channels and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.enterprise_channel_response_list import EnterpriseChannelResponseList

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseChannelResponseList from a JSON string
enterprise_channel_response_list_instance = EnterpriseChannelResponseList.from_json(json)
# print the JSON string representation of the object
print(EnterpriseChannelResponseList.to_json())

# convert the object into a dict
enterprise_channel_response_list_dict = enterprise_channel_response_list_instance.to_dict()
# create an instance of EnterpriseChannelResponseList from a dict
enterprise_channel_response_list_from_dict = EnterpriseChannelResponseList.from_dict(enterprise_channel_response_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


