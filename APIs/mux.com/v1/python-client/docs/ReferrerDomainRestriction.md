# ReferrerDomainRestriction

A list of domains allowed to play your videos.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_no_referrer** | **bool** | A boolean to determine whether to allow or deny HTTP requests without &#x60;Referer&#x60; HTTP request header. Playback requests coming from non-web/native applications like iOS, Android or smart TVs will not have a &#x60;Referer&#x60; HTTP header. Set this value to &#x60;true&#x60; to allow these playback requests. | [optional] [default to False]
**allowed_domains** | **List[str]** | List of domains allowed to play videos. Possible values are   * &#x60;[]&#x60; Empty Array indicates deny video playback requests for all domains   * &#x60;[\&quot;*\&quot;]&#x60; A Single Wildcard &#x60;*&#x60; entry means allow video playback requests from any domain   *  &#x60;[\&quot;*.example.com\&quot;, \&quot;foo.com\&quot;]&#x60; A list of up to 10 domains or valid dns-style wildcards  | [optional] 

## Example

```python
from openapi_client.models.referrer_domain_restriction import ReferrerDomainRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of ReferrerDomainRestriction from a JSON string
referrer_domain_restriction_instance = ReferrerDomainRestriction.from_json(json)
# print the JSON string representation of the object
print(ReferrerDomainRestriction.to_json())

# convert the object into a dict
referrer_domain_restriction_dict = referrer_domain_restriction_instance.to_dict()
# create an instance of ReferrerDomainRestriction from a dict
referrer_domain_restriction_from_dict = ReferrerDomainRestriction.from_dict(referrer_domain_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


