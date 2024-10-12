# ApplicantSocialLinksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of the social link | [optional] 
**type** | **str** | Type of the social link, e.g. twitter | [optional] 
**url** | **str** | URL of the social link, e.g. https://www.twitter.com/apideck | 

## Example

```python
from openapi_client.models.applicant_social_links_inner import ApplicantSocialLinksInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicantSocialLinksInner from a JSON string
applicant_social_links_inner_instance = ApplicantSocialLinksInner.from_json(json)
# print the JSON string representation of the object
print(ApplicantSocialLinksInner.to_json())

# convert the object into a dict
applicant_social_links_inner_dict = applicant_social_links_inner_instance.to_dict()
# create an instance of ApplicantSocialLinksInner from a dict
applicant_social_links_inner_from_dict = ApplicantSocialLinksInner.from_dict(applicant_social_links_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


