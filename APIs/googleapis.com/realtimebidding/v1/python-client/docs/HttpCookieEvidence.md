# HttpCookieEvidence

Evidence for HTTP cookie-related policy violations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cookie_names** | **List[str]** | Names of cookies that violate Google policies. For TOO_MANY_COOKIES policy, this will be the cookie names of top domains with the largest number of cookies. For other policies, this will be all the cookie names that violate the policy. | [optional] 
**max_cookie_count** | **int** | The largest number of cookies set by a creative. If this field is set, cookie_names above will be set to the cookie names of top domains with the largest number of cookies. This field will only be set for TOO_MANY_COOKIES policy. | [optional] 

## Example

```python
from openapi_client.models.http_cookie_evidence import HttpCookieEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of HttpCookieEvidence from a JSON string
http_cookie_evidence_instance = HttpCookieEvidence.from_json(json)
# print the JSON string representation of the object
print(HttpCookieEvidence.to_json())

# convert the object into a dict
http_cookie_evidence_dict = http_cookie_evidence_instance.to_dict()
# create an instance of HttpCookieEvidence from a dict
http_cookie_evidence_from_dict = HttpCookieEvidence.from_dict(http_cookie_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


