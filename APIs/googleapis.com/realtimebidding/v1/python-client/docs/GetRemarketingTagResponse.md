# GetRemarketingTagResponse

This has been sunset as of October 2023, and will return an error response if called. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Response for a request to get remarketing tag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snippet** | **str** | An HTML tag that can be placed on the advertiser&#39;s page to add users to a user list. For more information and code samples on using snippets on your website, refer to [Tag your site for remarketing](https://support.google.com/google-ads/answer/2476688). | [optional] 

## Example

```python
from openapi_client.models.get_remarketing_tag_response import GetRemarketingTagResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetRemarketingTagResponse from a JSON string
get_remarketing_tag_response_instance = GetRemarketingTagResponse.from_json(json)
# print the JSON string representation of the object
print(GetRemarketingTagResponse.to_json())

# convert the object into a dict
get_remarketing_tag_response_dict = get_remarketing_tag_response_instance.to_dict()
# create an instance of GetRemarketingTagResponse from a dict
get_remarketing_tag_response_from_dict = GetRemarketingTagResponse.from_dict(get_remarketing_tag_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


