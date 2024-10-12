# ApplicantWebsitesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the website | [optional] 
**type** | **str** | The type of website | [optional] 
**url** | **str** | The website URL | 

## Example

```python
from openapi_client.models.applicant_websites_inner import ApplicantWebsitesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicantWebsitesInner from a JSON string
applicant_websites_inner_instance = ApplicantWebsitesInner.from_json(json)
# print the JSON string representation of the object
print(ApplicantWebsitesInner.to_json())

# convert the object into a dict
applicant_websites_inner_dict = applicant_websites_inner_instance.to_dict()
# create an instance of ApplicantWebsitesInner from a dict
applicant_websites_inner_from_dict = ApplicantWebsitesInner.from_dict(applicant_websites_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


