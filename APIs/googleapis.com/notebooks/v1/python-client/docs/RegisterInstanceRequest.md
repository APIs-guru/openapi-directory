# RegisterInstanceRequest

Request for registering a notebook instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_id** | **str** | Required. User defined unique ID of this instance. The &#x60;instance_id&#x60; must be 1 to 63 characters long and contain only lowercase letters, numeric characters, and dashes. The first character must be a lowercase letter and the last character cannot be a dash. | [optional] 

## Example

```python
from openapi_client.models.register_instance_request import RegisterInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RegisterInstanceRequest from a JSON string
register_instance_request_instance = RegisterInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(RegisterInstanceRequest.to_json())

# convert the object into a dict
register_instance_request_dict = register_instance_request_instance.to_dict()
# create an instance of RegisterInstanceRequest from a dict
register_instance_request_from_dict = RegisterInstanceRequest.from_dict(register_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


