# SenderAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**key** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.sender_address import SenderAddress

# TODO update the JSON string below
json = "{}"
# create an instance of SenderAddress from a JSON string
sender_address_instance = SenderAddress.from_json(json)
# print the JSON string representation of the object
print(SenderAddress.to_json())

# convert the object into a dict
sender_address_dict = sender_address_instance.to_dict()
# create an instance of SenderAddress from a dict
sender_address_from_dict = SenderAddress.from_dict(sender_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


