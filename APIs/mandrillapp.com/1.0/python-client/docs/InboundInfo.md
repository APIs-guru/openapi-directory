# InboundInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**domain** | **str** |  | [optional] 
**valid_mx** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.inbound_info import InboundInfo

# TODO update the JSON string below
json = "{}"
# create an instance of InboundInfo from a JSON string
inbound_info_instance = InboundInfo.from_json(json)
# print the JSON string representation of the object
print(InboundInfo.to_json())

# convert the object into a dict
inbound_info_dict = inbound_info_instance.to_dict()
# create an instance of InboundInfo from a dict
inbound_info_from_dict = InboundInfo.from_dict(inbound_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


