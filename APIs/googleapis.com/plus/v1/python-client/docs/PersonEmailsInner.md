# PersonEmailsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of address. Possible values include, but are not limited to, the following values:   - \&quot;account\&quot; - Google account email address.  - \&quot;home\&quot; - Home email address.  - \&quot;work\&quot; - Work email address.  - \&quot;other\&quot; - Other. | [optional] 
**value** | **str** | The email address. | [optional] 

## Example

```python
from openapi_client.models.person_emails_inner import PersonEmailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PersonEmailsInner from a JSON string
person_emails_inner_instance = PersonEmailsInner.from_json(json)
# print the JSON string representation of the object
print(PersonEmailsInner.to_json())

# convert the object into a dict
person_emails_inner_dict = person_emails_inner_instance.to_dict()
# create an instance of PersonEmailsInner from a dict
person_emails_inner_from_dict = PersonEmailsInner.from_dict(person_emails_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


