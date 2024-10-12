# UserIm

JSON template for instant messenger of an user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_protocol** | **str** | Custom protocol. | [optional] 
**custom_type** | **str** | Custom type. | [optional] 
**im** | **str** | Instant messenger id. | [optional] 
**primary** | **bool** | If this is user&#39;s primary im. Only one entry could be marked as primary. | [optional] 
**protocol** | **str** | Protocol used in the instant messenger. It should be one of the values from ImProtocolTypes map. Similar to type it can take a CUSTOM value and specify the custom name in customProtocol field. | [optional] 
**type** | **str** | Each entry can have a type which indicates standard types of that entry. For example instant messengers could be of home work etc. In addition to the standard type an entry can have a custom type and can take any value. Such types should have the CUSTOM value as type and also have a customType value. | [optional] 

## Example

```python
from openapi_client.models.user_im import UserIm

# TODO update the JSON string below
json = "{}"
# create an instance of UserIm from a JSON string
user_im_instance = UserIm.from_json(json)
# print the JSON string representation of the object
print(UserIm.to_json())

# convert the object into a dict
user_im_dict = user_im_instance.to_dict()
# create an instance of UserIm from a dict
user_im_from_dict = UserIm.from_dict(user_im_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


