# EmailList

A single email group list

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**EmailListAttributes**](EmailListAttributes.md) |  | [optional] 
**id** | **int** | ID of the email list | [optional] 
**relationships** | [**EmailListRelationships**](EmailListRelationships.md) |  | [optional] 
**type** | **str** | Type of record. \&quot;emailList\&quot; | [optional] 

## Example

```python
from openapi_client.models.email_list import EmailList

# TODO update the JSON string below
json = "{}"
# create an instance of EmailList from a JSON string
email_list_instance = EmailList.from_json(json)
# print the JSON string representation of the object
print(EmailList.to_json())

# convert the object into a dict
email_list_dict = email_list_instance.to_dict()
# create an instance of EmailList from a dict
email_list_from_dict = EmailList.from_dict(email_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


