# AddStepPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact** | [**Contact**](Contact.md) |  | [optional] 
**type** | [**NotificationType**](NotificationType.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_step_payload import AddStepPayload

# TODO update the JSON string below
json = "{}"
# create an instance of AddStepPayload from a JSON string
add_step_payload_instance = AddStepPayload.from_json(json)
# print the JSON string representation of the object
print(AddStepPayload.to_json())

# convert the object into a dict
add_step_payload_dict = add_step_payload_instance.to_dict()
# create an instance of AddStepPayload from a dict
add_step_payload_from_dict = AddStepPayload.from_dict(add_step_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


