# PublisherProfileApiProto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | **str** | Publisher provided info on its audience. | [optional] 
**buyer_pitch_statement** | **str** | A pitch statement for the buyer | [optional] 
**direct_contact** | **str** | Direct contact for the publisher profile. | [optional] 
**exchange** | **str** | Exchange where this publisher profile is from. E.g. AdX, Rubicon etc... | [optional] 
**forecast_inventory** | **str** |  | [optional] 
**google_plus_link** | **str** | Link to publisher&#39;s Google+ page. | [optional] 
**is_parent** | **bool** | True, if this is the parent profile, which represents all domains owned by the publisher. | [optional] 
**is_published** | **bool** | True, if this profile is published. Deprecated for state. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;adexchangebuyer#publisherProfileApiProto\&quot;. | [optional] [default to 'adexchangebuyer#publisherProfileApiProto']
**logo_url** | **str** | The url to the logo for the publisher. | [optional] 
**media_kit_link** | **str** | The url for additional marketing and sales materials. | [optional] 
**name** | **str** |  | [optional] 
**overview** | **str** | Publisher provided overview. | [optional] 
**profile_id** | **int** | The pair of (seller.account_id, profile_id) uniquely identifies a publisher profile for a given publisher. | [optional] 
**programmatic_contact** | **str** | Programmatic contact for the publisher profile. | [optional] 
**publisher_app_ids** | **List[str]** | The list of app IDs represented in this publisher profile. Empty if this is a parent profile. Deprecated in favor of publisher_app. | [optional] 
**publisher_apps** | [**List[MobileApplication]**](MobileApplication.md) | The list of apps represented in this publisher profile. Empty if this is a parent profile. | [optional] 
**publisher_domains** | **List[str]** | The list of domains represented in this publisher profile. Empty if this is a parent profile. | [optional] 
**publisher_profile_id** | **str** | Unique Id for publisher profile. | [optional] 
**publisher_provided_forecast** | [**PublisherProvidedForecast**](PublisherProvidedForecast.md) |  | [optional] 
**rate_card_info_link** | **str** | Link to publisher rate card | [optional] 
**sample_page_link** | **str** | Link for a sample content page. | [optional] 
**seller** | [**Seller**](Seller.md) |  | [optional] 
**state** | **str** | State of the publisher profile. | [optional] 
**top_headlines** | **List[str]** | Publisher provided key metrics and rankings. | [optional] 

## Example

```python
from openapi_client.models.publisher_profile_api_proto import PublisherProfileApiProto

# TODO update the JSON string below
json = "{}"
# create an instance of PublisherProfileApiProto from a JSON string
publisher_profile_api_proto_instance = PublisherProfileApiProto.from_json(json)
# print the JSON string representation of the object
print(PublisherProfileApiProto.to_json())

# convert the object into a dict
publisher_profile_api_proto_dict = publisher_profile_api_proto_instance.to_dict()
# create an instance of PublisherProfileApiProto from a dict
publisher_profile_api_proto_from_dict = PublisherProfileApiProto.from_dict(publisher_profile_api_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


