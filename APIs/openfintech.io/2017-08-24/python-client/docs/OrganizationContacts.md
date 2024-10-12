# OrganizationContacts

Organization`s contacts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**fax** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 
**skype** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.organization_contacts import OrganizationContacts

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationContacts from a JSON string
organization_contacts_instance = OrganizationContacts.from_json(json)
# print the JSON string representation of the object
print(OrganizationContacts.to_json())

# convert the object into a dict
organization_contacts_dict = organization_contacts_instance.to_dict()
# create an instance of OrganizationContacts from a dict
organization_contacts_from_dict = OrganizationContacts.from_dict(organization_contacts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


