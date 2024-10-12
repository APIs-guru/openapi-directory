# ThirdPartyLink

A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#thirdPartyLink\&quot;. | [optional] [default to 'youtube#thirdPartyLink']
**linking_token** | **str** | The linking_token identifies a YouTube account and channel with which the third party account is linked. | [optional] 
**snippet** | [**ThirdPartyLinkSnippet**](ThirdPartyLinkSnippet.md) |  | [optional] 
**status** | [**ThirdPartyLinkStatus**](ThirdPartyLinkStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.third_party_link import ThirdPartyLink

# TODO update the JSON string below
json = "{}"
# create an instance of ThirdPartyLink from a JSON string
third_party_link_instance = ThirdPartyLink.from_json(json)
# print the JSON string representation of the object
print(ThirdPartyLink.to_json())

# convert the object into a dict
third_party_link_dict = third_party_link_instance.to_dict()
# create an instance of ThirdPartyLink from a dict
third_party_link_from_dict = ThirdPartyLink.from_dict(third_party_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


