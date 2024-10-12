# Location

A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_words_location_extensions** | [**AdWordsLocationExtensions**](AdWordsLocationExtensions.md) |  | [optional] 
**additional_categories** | [**List[Category]**](Category.md) | Additional categories to describe your business. Categories help your customers find accurate, specific results for services they&#39;re interested in. To keep your business information accurate and live, make sure that you use as few categories as possible to describe your overall core business. Choose categories that are as specific as possible, but representative of your main business. | [optional] 
**additional_phones** | **List[str]** | Up to two phone numbers (mobile or landline, no fax) at which your business can be called, in addition to your primary phone number. | [optional] 
**address** | [**PostalAddress**](PostalAddress.md) |  | [optional] 
**attributes** | [**List[Attribute]**](Attribute.md) | Attributes for this location. | [optional] 
**labels** | **List[str]** | A collection of free-form strings to allow you to tag your business. These labels are NOT user facing; only you can see them. Limited to 255 characters (per label). | [optional] 
**language_code** | **str** | The language of the location. Set during creation and not updateable. | [optional] 
**latlng** | [**LatLng**](LatLng.md) |  | [optional] 
**location_key** | [**LocationKey**](LocationKey.md) |  | [optional] 
**location_name** | **str** | Location name should reflect your business&#39;s real-world name, as used consistently on your storefront, website, and stationery, and as known to customers. Any additional information, when relevant, can be included in other fields of the resource (for example, &#x60;Address&#x60;, &#x60;Categories&#x60;). Don&#39;t add unnecessary information to your name (for example, prefer \&quot;Google\&quot; over \&quot;Google Inc. - Mountain View Corporate Headquarters\&quot;). Don&#39;t include marketing taglines, store codes, special characters, hours or closed/open status, phone numbers, website URLs, service/product information, location/address or directions, or containment information (for example, \&quot;Chase ATM in Duane Reade\&quot;). | [optional] 
**location_state** | [**LocationState**](LocationState.md) |  | [optional] 
**metadata** | [**Metadata**](Metadata.md) |  | [optional] 
**more_hours** | [**List[MoreHours]**](MoreHours.md) | More hours for a business&#39;s different departments or specific customers. | [optional] 
**name** | **str** | Google identifier for this location in the form: &#x60;accounts/{account_id}/locations/{location_id}&#x60; In the context of matches, this field will not be populated. | [optional] 
**open_info** | [**OpenInfo**](OpenInfo.md) |  | [optional] 
**price_lists** | [**List[PriceList]**](PriceList.md) | Price list information for this location. | [optional] 
**primary_category** | [**Category**](Category.md) |  | [optional] 
**primary_phone** | **str** | A phone number that connects to your individual business location as directly as possible. Use a local phone number instead of a central, call center helpline number whenever possible. | [optional] 
**profile** | [**Profile**](Profile.md) |  | [optional] 
**regular_hours** | [**BusinessHours**](BusinessHours.md) |  | [optional] 
**relationship_data** | [**RelationshipData**](RelationshipData.md) |  | [optional] 
**service_area** | [**ServiceAreaBusiness**](ServiceAreaBusiness.md) |  | [optional] 
**special_hours** | [**SpecialHours**](SpecialHours.md) |  | [optional] 
**store_code** | **str** | External identifier for this location, which must be unique inside a given account. This is a means of associating the location with your own records. | [optional] 
**website_url** | **str** | A URL for this business. If possible, use a URL that represents this individual business location instead of a generic website/URL that represents all locations, or the brand. | [optional] 

## Example

```python
from openapi_client.models.location import Location

# TODO update the JSON string below
json = "{}"
# create an instance of Location from a JSON string
location_instance = Location.from_json(json)
# print the JSON string representation of the object
print(Location.to_json())

# convert the object into a dict
location_dict = location_instance.to_dict()
# create an instance of Location from a dict
location_from_dict = Location.from_dict(location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


