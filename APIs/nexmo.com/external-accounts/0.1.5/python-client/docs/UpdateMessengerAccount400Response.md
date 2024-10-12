# UpdateMessengerAccount400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** |  | [optional] 
**instance** | **str** |  | [optional] 
**invalid_params** | [**List[UpdateMessengerAccount400ResponseInvalidParamsInner]**](UpdateMessengerAccount400ResponseInvalidParamsInner.md) |  | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.update_messenger_account400_response import UpdateMessengerAccount400Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMessengerAccount400Response from a JSON string
update_messenger_account400_response_instance = UpdateMessengerAccount400Response.from_json(json)
# print the JSON string representation of the object
print(UpdateMessengerAccount400Response.to_json())

# convert the object into a dict
update_messenger_account400_response_dict = update_messenger_account400_response_instance.to_dict()
# create an instance of UpdateMessengerAccount400Response from a dict
update_messenger_account400_response_from_dict = UpdateMessengerAccount400Response.from_dict(update_messenger_account400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


