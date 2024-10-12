# AddActionSmsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**AddActionSmsRequestConfig**](AddActionSmsRequestConfig.md) |  | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.add_action_sms_request import AddActionSmsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddActionSmsRequest from a JSON string
add_action_sms_request_instance = AddActionSmsRequest.from_json(json)
# print the JSON string representation of the object
print(AddActionSmsRequest.to_json())

# convert the object into a dict
add_action_sms_request_dict = add_action_sms_request_instance.to_dict()
# create an instance of AddActionSmsRequest from a dict
add_action_sms_request_from_dict = AddActionSmsRequest.from_dict(add_action_sms_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


