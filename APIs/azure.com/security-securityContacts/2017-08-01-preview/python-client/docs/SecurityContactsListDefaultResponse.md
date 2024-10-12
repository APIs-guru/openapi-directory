# SecurityContactsListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**SecurityContactsListDefaultResponseError**](SecurityContactsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.security_contacts_list_default_response import SecurityContactsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityContactsListDefaultResponse from a JSON string
security_contacts_list_default_response_instance = SecurityContactsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(SecurityContactsListDefaultResponse.to_json())

# convert the object into a dict
security_contacts_list_default_response_dict = security_contacts_list_default_response_instance.to_dict()
# create an instance of SecurityContactsListDefaultResponse from a dict
security_contacts_list_default_response_from_dict = SecurityContactsListDefaultResponse.from_dict(security_contacts_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


