# CreateMessengerAccount400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** |  | [optional] 
**instance** | **str** |  | [optional] 
**invalid_params** | [**List[CreateMessengerAccount400ResponseInvalidParamsInner]**](CreateMessengerAccount400ResponseInvalidParamsInner.md) |  | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_messenger_account400_response import CreateMessengerAccount400Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateMessengerAccount400Response from a JSON string
create_messenger_account400_response_instance = CreateMessengerAccount400Response.from_json(json)
# print the JSON string representation of the object
print(CreateMessengerAccount400Response.to_json())

# convert the object into a dict
create_messenger_account400_response_dict = create_messenger_account400_response_instance.to_dict()
# create an instance of CreateMessengerAccount400Response from a dict
create_messenger_account400_response_from_dict = CreateMessengerAccount400Response.from_dict(create_messenger_account400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


