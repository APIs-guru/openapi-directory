# RegisterEmailResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_ids** | **List[str]** | An array of ApplicationID strings attached to the value provided. | [optional] 
**name** | **str** | An optional name to be attached to this binding | [optional] 
**provider** | **str** | Enum identifer of provider type. | [optional] 
**value** | **str** | Value given to the provider to attach to the Application IDs. | [optional] 

## Example

```python
from openapi_client.models.register_email_response import RegisterEmailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RegisterEmailResponse from a JSON string
register_email_response_instance = RegisterEmailResponse.from_json(json)
# print the JSON string representation of the object
print(RegisterEmailResponse.to_json())

# convert the object into a dict
register_email_response_dict = register_email_response_instance.to_dict()
# create an instance of RegisterEmailResponse from a dict
register_email_response_from_dict = RegisterEmailResponse.from_dict(register_email_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


