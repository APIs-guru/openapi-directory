# EmailTemplateCollection

Paged email template list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[EmailTemplateContract]**](EmailTemplateContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.email_template_collection import EmailTemplateCollection

# TODO update the JSON string below
json = "{}"
# create an instance of EmailTemplateCollection from a JSON string
email_template_collection_instance = EmailTemplateCollection.from_json(json)
# print the JSON string representation of the object
print(EmailTemplateCollection.to_json())

# convert the object into a dict
email_template_collection_dict = email_template_collection_instance.to_dict()
# create an instance of EmailTemplateCollection from a dict
email_template_collection_from_dict = EmailTemplateCollection.from_dict(email_template_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


