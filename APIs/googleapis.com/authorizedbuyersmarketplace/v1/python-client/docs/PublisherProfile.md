# PublisherProfile

The values in the publisher profile are supplied by the publisher. All fields are not filterable unless stated otherwise.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience_description** | **str** | Description on the publisher&#39;s audience. | [optional] 
**direct_deals_contact** | **str** | Contact information for direct reservation deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses. | [optional] 
**display_name** | **str** | Display name of the publisher profile. Can be used to filter the response of the publisherProfiles.list method. | [optional] 
**domains** | **List[str]** | The list of domains represented in this publisher profile. Empty if this is a parent profile. These are top private domains, meaning that these will not contain a string like \&quot;photos.google.co.uk/123\&quot;, but will instead contain \&quot;google.co.uk\&quot;. Can be used to filter the response of the publisherProfiles.list method. | [optional] 
**is_parent** | **bool** | Indicates if this profile is the parent profile of the seller. A parent profile represents all the inventory from the seller, as opposed to child profile that is created to brand a portion of inventory. One seller has only one parent publisher profile, and can have multiple child profiles. See https://support.google.com/admanager/answer/6035806 for details. Can be used to filter the response of the publisherProfiles.list method by setting the filter to \&quot;is_parent: true\&quot;. | [optional] 
**logo_url** | **str** | A Google public URL to the logo for this publisher profile. The logo is stored as a PNG, JPG, or GIF image. | [optional] 
**media_kit_url** | **str** | URL to additional marketing and sales materials. | [optional] 
**mobile_apps** | [**List[PublisherProfileMobileApplication]**](PublisherProfileMobileApplication.md) | The list of apps represented in this publisher profile. Empty if this is a parent profile. | [optional] 
**name** | **str** | Name of the publisher profile. Format: &#x60;buyers/{buyer}/publisherProfiles/{publisher_profile}&#x60; | [optional] 
**overview** | **str** | Overview of the publisher. | [optional] 
**pitch_statement** | **str** | Statement explaining what&#39;s unique about publisher&#39;s business, and why buyers should partner with the publisher. | [optional] 
**programmatic_deals_contact** | **str** | Contact information for programmatic deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses. | [optional] 
**publisher_code** | **str** | A unique identifying code for the seller. This value is the same for all of the seller&#39;s parent and child publisher profiles. Can be used to filter the response of the publisherProfiles.list method. | [optional] 
**sample_page_url** | **str** | URL to a sample content page. | [optional] 
**top_headlines** | **List[str]** | Up to three key metrics and rankings. For example, \&quot;#1 Mobile News Site for 20 Straight Months\&quot;. | [optional] 

## Example

```python
from openapi_client.models.publisher_profile import PublisherProfile

# TODO update the JSON string below
json = "{}"
# create an instance of PublisherProfile from a JSON string
publisher_profile_instance = PublisherProfile.from_json(json)
# print the JSON string representation of the object
print(PublisherProfile.to_json())

# convert the object into a dict
publisher_profile_dict = publisher_profile_instance.to_dict()
# create an instance of PublisherProfile from a dict
publisher_profile_from_dict = PublisherProfile.from_dict(publisher_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


