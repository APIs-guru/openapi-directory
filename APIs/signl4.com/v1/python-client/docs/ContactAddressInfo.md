# ContactAddressInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**channel** | [**ChannelTypes**](ChannelTypes.md) |  | [optional] 
**created** | **datetime** |  | [optional] 
**device** | [**Device**](Device.md) |  | [optional] 
**id** | **str** |  | [optional] 
**last_updated** | **datetime** |  | [optional] 
**options** | **int** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.contact_address_info import ContactAddressInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ContactAddressInfo from a JSON string
contact_address_info_instance = ContactAddressInfo.from_json(json)
# print the JSON string representation of the object
print(ContactAddressInfo.to_json())

# convert the object into a dict
contact_address_info_dict = contact_address_info_instance.to_dict()
# create an instance of ContactAddressInfo from a dict
contact_address_info_from_dict = ContactAddressInfo.from_dict(contact_address_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


