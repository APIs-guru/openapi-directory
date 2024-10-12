# SiteContact

Site Contact

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address of this site contact. | [optional] 
**contact_type** | **str** | Site contact type. | [optional] 
**email** | **str** | Email address of this site contact. This is a required field. | [optional] 
**first_name** | **str** | First name of this site contact. | [optional] 
**id** | **str** | ID of this site contact. This is a read-only, auto-generated field. | [optional] 
**last_name** | **str** | Last name of this site contact. | [optional] 
**phone** | **str** | Primary phone number of this site contact. | [optional] 
**title** | **str** | Title or designation of this site contact. | [optional] 

## Example

```python
from openapi_client.models.site_contact import SiteContact

# TODO update the JSON string below
json = "{}"
# create an instance of SiteContact from a JSON string
site_contact_instance = SiteContact.from_json(json)
# print the JSON string representation of the object
print(SiteContact.to_json())

# convert the object into a dict
site_contact_dict = site_contact_instance.to_dict()
# create an instance of SiteContact from a dict
site_contact_from_dict = SiteContact.from_dict(site_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


