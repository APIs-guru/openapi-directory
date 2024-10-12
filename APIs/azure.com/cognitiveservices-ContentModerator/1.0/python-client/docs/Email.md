# Email

Email Address details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected** | **str** | Detected Email Address from the input text content. | [optional] 
**index** | **int** | Index(Location) of the Email address in the input text content. | [optional] 
**sub_type** | **str** | Subtype of the detected Email Address. | [optional] 
**text** | **str** | Email Address in the input text content. | [optional] 

## Example

```python
from openapi_client.models.email import Email

# TODO update the JSON string below
json = "{}"
# create an instance of Email from a JSON string
email_instance = Email.from_json(json)
# print the JSON string representation of the object
print(Email.to_json())

# convert the object into a dict
email_dict = email_instance.to_dict()
# create an instance of Email from a dict
email_from_dict = Email.from_dict(email_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


