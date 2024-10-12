# RegisterPayload

Represents payload for Register action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registration_code** | **str** | The registration code of the lab. | [optional] 

## Example

```python
from openapi_client.models.register_payload import RegisterPayload

# TODO update the JSON string below
json = "{}"
# create an instance of RegisterPayload from a JSON string
register_payload_instance = RegisterPayload.from_json(json)
# print the JSON string representation of the object
print(RegisterPayload.to_json())

# convert the object into a dict
register_payload_dict = register_payload_instance.to_dict()
# create an instance of RegisterPayload from a dict
register_payload_from_dict = RegisterPayload.from_dict(register_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


