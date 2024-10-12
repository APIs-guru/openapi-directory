# Person

Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[Address]**](Address.md) | The person&#39;s street addresses. | [optional] 
**age_range** | **str** | Output only. **DEPRECATED** (Please use &#x60;person.ageRanges&#x60; instead) The person&#39;s age range. | [optional] [readonly] 
**age_ranges** | [**List[AgeRangeType]**](AgeRangeType.md) | Output only. The person&#39;s age ranges. | [optional] [readonly] 
**biographies** | [**List[Biography]**](Biography.md) | The person&#39;s biographies. This field is a singleton for contact sources. | [optional] 
**birthdays** | [**List[Birthday]**](Birthday.md) | The person&#39;s birthdays. This field is a singleton for contact sources. | [optional] 
**bragging_rights** | [**List[BraggingRights]**](BraggingRights.md) | **DEPRECATED**: No data will be returned The person&#39;s bragging rights. | [optional] 
**calendar_urls** | [**List[CalendarUrl]**](CalendarUrl.md) | The person&#39;s calendar URLs. | [optional] 
**client_data** | [**List[ClientData]**](ClientData.md) | The person&#39;s client data. | [optional] 
**cover_photos** | [**List[CoverPhoto]**](CoverPhoto.md) | Output only. The person&#39;s cover photos. | [optional] [readonly] 
**email_addresses** | [**List[EmailAddress]**](EmailAddress.md) | The person&#39;s email addresses. For &#x60;people.connections.list&#x60; and &#x60;otherContacts.list&#x60; the number of email addresses is limited to 100. If a Person has more email addresses the entire set can be obtained by calling GetPeople. | [optional] 
**etag** | **str** | The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the resource. Used for web cache validation. | [optional] 
**events** | [**List[Event]**](Event.md) | The person&#39;s events. | [optional] 
**external_ids** | [**List[ExternalId]**](ExternalId.md) | The person&#39;s external IDs. | [optional] 
**file_ases** | [**List[FileAs]**](FileAs.md) | The person&#39;s file-ases. | [optional] 
**genders** | [**List[Gender]**](Gender.md) | The person&#39;s genders. This field is a singleton for contact sources. | [optional] 
**im_clients** | [**List[ImClient]**](ImClient.md) | The person&#39;s instant messaging clients. | [optional] 
**interests** | [**List[Interest]**](Interest.md) | The person&#39;s interests. | [optional] 
**locales** | [**List[Locale]**](Locale.md) | The person&#39;s locale preferences. | [optional] 
**locations** | [**List[Location]**](Location.md) | The person&#39;s locations. | [optional] 
**memberships** | [**List[Membership]**](Membership.md) | The person&#39;s group memberships. | [optional] 
**metadata** | [**PersonMetadata**](PersonMetadata.md) |  | [optional] 
**misc_keywords** | [**List[MiscKeyword]**](MiscKeyword.md) | The person&#39;s miscellaneous keywords. | [optional] 
**names** | [**List[Name]**](Name.md) | The person&#39;s names. This field is a singleton for contact sources. | [optional] 
**nicknames** | [**List[Nickname]**](Nickname.md) | The person&#39;s nicknames. | [optional] 
**occupations** | [**List[Occupation]**](Occupation.md) | The person&#39;s occupations. | [optional] 
**organizations** | [**List[Organization]**](Organization.md) | The person&#39;s past or current organizations. | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) | The person&#39;s phone numbers. For &#x60;people.connections.list&#x60; and &#x60;otherContacts.list&#x60; the number of phone numbers is limited to 100. If a Person has more phone numbers the entire set can be obtained by calling GetPeople. | [optional] 
**photos** | [**List[Photo]**](Photo.md) | Output only. The person&#39;s photos. | [optional] [readonly] 
**relations** | [**List[Relation]**](Relation.md) | The person&#39;s relations. | [optional] 
**relationship_interests** | [**List[RelationshipInterest]**](RelationshipInterest.md) | Output only. **DEPRECATED**: No data will be returned The person&#39;s relationship interests. | [optional] [readonly] 
**relationship_statuses** | [**List[RelationshipStatus]**](RelationshipStatus.md) | Output only. **DEPRECATED**: No data will be returned The person&#39;s relationship statuses. | [optional] [readonly] 
**residences** | [**List[Residence]**](Residence.md) | **DEPRECATED**: (Please use &#x60;person.locations&#x60; instead) The person&#39;s residences. | [optional] 
**resource_name** | **str** | The resource name for the person, assigned by the server. An ASCII string in the form of &#x60;people/{person_id}&#x60;. | [optional] 
**sip_addresses** | [**List[SipAddress]**](SipAddress.md) | The person&#39;s SIP addresses. | [optional] 
**skills** | [**List[Skill]**](Skill.md) | The person&#39;s skills. | [optional] 
**taglines** | [**List[Tagline]**](Tagline.md) | Output only. **DEPRECATED**: No data will be returned The person&#39;s taglines. | [optional] [readonly] 
**urls** | [**List[Url]**](Url.md) | The person&#39;s associated URLs. | [optional] 
**user_defined** | [**List[UserDefined]**](UserDefined.md) | The person&#39;s user defined data. | [optional] 

## Example

```python
from openapi_client.models.person import Person

# TODO update the JSON string below
json = "{}"
# create an instance of Person from a JSON string
person_instance = Person.from_json(json)
# print the JSON string representation of the object
print(Person.to_json())

# convert the object into a dict
person_dict = person_instance.to_dict()
# create an instance of Person from a dict
person_from_dict = Person.from_dict(person_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


