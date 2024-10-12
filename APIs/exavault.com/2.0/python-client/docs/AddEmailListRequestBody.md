# AddEmailListRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[str]** | Array of email addresses to include in the email list.  | 
**name** | **str** | Name of the email list.  | 

## Example

```python
from openapi_client.models.add_email_list_request_body import AddEmailListRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of AddEmailListRequestBody from a JSON string
add_email_list_request_body_instance = AddEmailListRequestBody.from_json(json)
# print the JSON string representation of the object
print(AddEmailListRequestBody.to_json())

# convert the object into a dict
add_email_list_request_body_dict = add_email_list_request_body_instance.to_dict()
# create an instance of AddEmailListRequestBody from a dict
add_email_list_request_body_from_dict = AddEmailListRequestBody.from_dict(add_email_list_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


