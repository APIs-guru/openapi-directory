# ThirdPartyLinkListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**items** | [**List[ThirdPartyLink]**](ThirdPartyLink.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#thirdPartyLinkListResponse\&quot;. | [optional] [default to 'youtube#thirdPartyLinkListResponse']

## Example

```python
from openapi_client.models.third_party_link_list_response import ThirdPartyLinkListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ThirdPartyLinkListResponse from a JSON string
third_party_link_list_response_instance = ThirdPartyLinkListResponse.from_json(json)
# print the JSON string representation of the object
print(ThirdPartyLinkListResponse.to_json())

# convert the object into a dict
third_party_link_list_response_dict = third_party_link_list_response_instance.to_dict()
# create an instance of ThirdPartyLinkListResponse from a dict
third_party_link_list_response_from_dict = ThirdPartyLinkListResponse.from_dict(third_party_link_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


