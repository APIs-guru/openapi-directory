# AddUserPayload

The user information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin** | **bool** |  | [optional] 
**email** | **str** |  | 
**expiration_hours** | **float** | The validity duration for the invitatation/set password link sent to the added user. | [optional] 
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**username** | **str** |  | 

## Example

```python
from openapi_client.models.add_user_payload import AddUserPayload

# TODO update the JSON string below
json = "{}"
# create an instance of AddUserPayload from a JSON string
add_user_payload_instance = AddUserPayload.from_json(json)
# print the JSON string representation of the object
print(AddUserPayload.to_json())

# convert the object into a dict
add_user_payload_dict = add_user_payload_instance.to_dict()
# create an instance of AddUserPayload from a dict
add_user_payload_from_dict = AddUserPayload.from_dict(add_user_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


