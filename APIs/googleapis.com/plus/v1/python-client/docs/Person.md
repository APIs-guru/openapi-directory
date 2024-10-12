# Person


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about_me** | **str** | A short biography for this person. | [optional] 
**age_range** | [**PersonAgeRange**](PersonAgeRange.md) |  | [optional] 
**birthday** | **str** | The person&#39;s date of birth, represented as YYYY-MM-DD. | [optional] 
**bragging_rights** | **str** | The \&quot;bragging rights\&quot; line of this person. | [optional] 
**circled_by_count** | **int** | For followers who are visible, the number of people who have added this person or page to a circle. | [optional] 
**cover** | [**PersonCover**](PersonCover.md) |  | [optional] 
**current_location** | **str** | (this field is not currently used) | [optional] 
**display_name** | **str** | The name of this person, which is suitable for display. | [optional] 
**domain** | **str** | The hosted domain name for the user&#39;s Google Apps account. For instance, example.com. The plus.profile.emails.read or email scope is needed to get this domain name. | [optional] 
**emails** | [**List[PersonEmailsInner]**](PersonEmailsInner.md) | A list of email addresses that this person has, including their Google account email address, and the public verified email addresses on their Google+ profile. The plus.profile.emails.read scope is needed to retrieve these email addresses, or the email scope can be used to retrieve just the Google account email address. | [optional] 
**etag** | **str** | ETag of this response for caching purposes. | [optional] 
**gender** | **str** | The person&#39;s gender. Possible values include, but are not limited to, the following values:   - \&quot;male\&quot; - Male gender.  - \&quot;female\&quot; - Female gender.  - \&quot;other\&quot; - Other. | [optional] 
**id** | **str** | The ID of this person. | [optional] 
**image** | [**PersonImage**](PersonImage.md) |  | [optional] 
**is_plus_user** | **bool** | Whether this user has signed up for Google+. | [optional] 
**kind** | **str** | Identifies this resource as a person. Value: \&quot;plus#person\&quot;. | [optional] [default to 'plus#person']
**language** | **str** | The user&#39;s preferred language for rendering. | [optional] 
**name** | [**PersonName**](PersonName.md) |  | [optional] 
**nickname** | **str** | The nickname of this person. | [optional] 
**object_type** | **str** | Type of person within Google+. Possible values include, but are not limited to, the following values:   - \&quot;person\&quot; - represents an actual person.  - \&quot;page\&quot; - represents a page. | [optional] 
**occupation** | **str** | The occupation of this person. | [optional] 
**organizations** | [**List[PersonOrganizationsInner]**](PersonOrganizationsInner.md) | A list of current or past organizations with which this person is associated. | [optional] 
**places_lived** | [**List[PersonPlacesLivedInner]**](PersonPlacesLivedInner.md) | A list of places where this person has lived. | [optional] 
**plus_one_count** | **int** | If a Google+ Page, the number of people who have +1&#39;d this page. | [optional] 
**relationship_status** | **str** | The person&#39;s relationship status. Possible values include, but are not limited to, the following values:   - \&quot;single\&quot; - Person is single.  - \&quot;in_a_relationship\&quot; - Person is in a relationship.  - \&quot;engaged\&quot; - Person is engaged.  - \&quot;married\&quot; - Person is married.  - \&quot;its_complicated\&quot; - The relationship is complicated.  - \&quot;open_relationship\&quot; - Person is in an open relationship.  - \&quot;widowed\&quot; - Person is widowed.  - \&quot;in_domestic_partnership\&quot; - Person is in a domestic partnership.  - \&quot;in_civil_union\&quot; - Person is in a civil union. | [optional] 
**skills** | **str** | The person&#39;s skills. | [optional] 
**tagline** | **str** | The brief description (tagline) of this person. | [optional] 
**url** | **str** | The URL of this person&#39;s profile. | [optional] 
**urls** | [**List[PersonUrlsInner]**](PersonUrlsInner.md) | A list of URLs for this person. | [optional] 
**verified** | **bool** | Whether the person or Google+ Page has been verified. | [optional] 

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


