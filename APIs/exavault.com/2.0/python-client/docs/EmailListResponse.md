# EmailListResponse

Response object for a single email list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**EmailList**](EmailList.md) |  | [optional] 
**included** | [**List[User]**](User.md) |  | [optional] 
**response_status** | **int** | Http Status code | [optional] 

## Example

```python
from openapi_client.models.email_list_response import EmailListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EmailListResponse from a JSON string
email_list_response_instance = EmailListResponse.from_json(json)
# print the JSON string representation of the object
print(EmailListResponse.to_json())

# convert the object into a dict
email_list_response_dict = email_list_response_instance.to_dict()
# create an instance of EmailListResponse from a dict
email_list_response_from_dict = EmailListResponse.from_dict(email_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


