# Instance

Represents the software instance of Mastodon running on this domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_required** | **bool** | Whether registrations require moderator approval. | 
**contact_account** | [**Account**](Account.md) |  | [optional] 
**description** | **str** | Admin-defined description of the Mastodon site. | 
**email** | **str** | An email that may be contacted for any inquiries. | 
**invites_enabled** | **bool** | Whether invites are enabled. | 
**languages** | **List[str]** | Primary languages of the website and its staff. ISO 639 Part 1-5 language codes. | 
**registrations** | **bool** | Whether registrations are enabled. | 
**short_description** | **str** | A shorter description defined by the admin. | 
**stats** | **object** | Statistics about how much information the instance contains. | 
**thumbnail** | **str** | Banner image for the website. | [optional] 
**title** | **str** | The title of the website. | 
**uri** | **str** | The domain name of the instance. | 
**urls** | **object** | URLs of interest for clients apps. | 
**version** | **str** | The version of Mastodon installed on the instance. | 

## Example

```python
from openapi_client.models.instance import Instance

# TODO update the JSON string below
json = "{}"
# create an instance of Instance from a JSON string
instance_instance = Instance.from_json(json)
# print the JSON string representation of the object
print(Instance.to_json())

# convert the object into a dict
instance_dict = instance_instance.to_dict()
# create an instance of Instance from a dict
instance_from_dict = Instance.from_dict(instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


