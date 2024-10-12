# GoogleCloudRetailV2betaAudience

An intended audience of the Product for whom it's sold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age_groups** | **List[str]** | The age groups of the audience. Strongly encouraged to use the standard values: \&quot;newborn\&quot; (up to 3 months old), \&quot;infant\&quot; (3–12 months old), \&quot;toddler\&quot; (1–5 years old), \&quot;kids\&quot; (5–13 years old), \&quot;adult\&quot; (typically teens or older). At most 5 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [age_group](https://support.google.com/merchants/answer/6324463). Schema.org property [Product.audience.suggestedMinAge](https://schema.org/suggestedMinAge) and [Product.audience.suggestedMaxAge](https://schema.org/suggestedMaxAge). | [optional] 
**genders** | **List[str]** | The genders of the audience. Strongly encouraged to use the standard values: \&quot;male\&quot;, \&quot;female\&quot;, \&quot;unisex\&quot;. At most 5 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [gender](https://support.google.com/merchants/answer/6324479). Schema.org property [Product.audience.suggestedGender](https://schema.org/suggestedGender). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_audience import GoogleCloudRetailV2betaAudience

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaAudience from a JSON string
google_cloud_retail_v2beta_audience_instance = GoogleCloudRetailV2betaAudience.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaAudience.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_audience_dict = google_cloud_retail_v2beta_audience_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaAudience from a dict
google_cloud_retail_v2beta_audience_from_dict = GoogleCloudRetailV2betaAudience.from_dict(google_cloud_retail_v2beta_audience_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


