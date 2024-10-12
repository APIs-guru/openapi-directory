# Registration

Registration information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RegistrationProperties**](RegistrationProperties.md) |  | [optional] 
**etag** | **str** | The entity tag used for optimistic concurrency when modifying the resource. | [optional] 
**id** | **str** | ID of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource. | 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Custom tags for the resource. | [optional] 
**type** | **str** | Type of Resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.registration import Registration

# TODO update the JSON string below
json = "{}"
# create an instance of Registration from a JSON string
registration_instance = Registration.from_json(json)
# print the JSON string representation of the object
print(Registration.to_json())

# convert the object into a dict
registration_dict = registration_instance.to_dict()
# create an instance of Registration from a dict
registration_from_dict = Registration.from_dict(registration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


