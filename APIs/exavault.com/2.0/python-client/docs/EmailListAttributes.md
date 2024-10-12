# EmailListAttributes

Information for the email list, including its short title and recipient emails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | Created datetime | [optional] 
**emails** | **List[str]** | Recipient emails in the email list | [optional] 
**modified** | **datetime** | Modified datetime | [optional] 
**name** | **str** | Short title for email list | [optional] 

## Example

```python
from openapi_client.models.email_list_attributes import EmailListAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of EmailListAttributes from a JSON string
email_list_attributes_instance = EmailListAttributes.from_json(json)
# print the JSON string representation of the object
print(EmailListAttributes.to_json())

# convert the object into a dict
email_list_attributes_dict = email_list_attributes_instance.to_dict()
# create an instance of EmailListAttributes from a dict
email_list_attributes_from_dict = EmailListAttributes.from_dict(email_list_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


