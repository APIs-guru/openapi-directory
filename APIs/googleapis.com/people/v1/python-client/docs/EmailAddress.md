# EmailAddress

A person's email address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the email. | [optional] 
**formatted_type** | **str** | Output only. The type of the email address translated and formatted in the viewer&#39;s account locale or the &#x60;Accept-Language&#x60; HTTP header locale. | [optional] [readonly] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**type** | **str** | The type of the email address. The type can be custom or one of these predefined values: * &#x60;home&#x60; * &#x60;work&#x60; * &#x60;other&#x60; | [optional] 
**value** | **str** | The email address. | [optional] 

## Example

```python
from openapi_client.models.email_address import EmailAddress

# TODO update the JSON string below
json = "{}"
# create an instance of EmailAddress from a JSON string
email_address_instance = EmailAddress.from_json(json)
# print the JSON string representation of the object
print(EmailAddress.to_json())

# convert the object into a dict
email_address_dict = email_address_instance.to_dict()
# create an instance of EmailAddress from a dict
email_address_from_dict = EmailAddress.from_dict(email_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


