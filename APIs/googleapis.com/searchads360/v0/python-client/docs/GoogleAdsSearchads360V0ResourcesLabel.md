# GoogleAdsSearchads360V0ResourcesLabel

A label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Output only. ID of the label. Read only. | [optional] [readonly] 
**name** | **str** | The name of the label. This field is required and should not be empty when creating a new label. The length of this string should be between 1 and 80, inclusive. | [optional] 
**resource_name** | **str** | Immutable. Name of the resource. Label resource names have the form: &#x60;customers/{customer_id}/labels/{label_id}&#x60; | [optional] 
**status** | **str** | Output only. Status of the label. Read only. | [optional] [readonly] 
**text_label** | [**GoogleAdsSearchads360V0CommonTextLabel**](GoogleAdsSearchads360V0CommonTextLabel.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_label import GoogleAdsSearchads360V0ResourcesLabel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesLabel from a JSON string
google_ads_searchads360_v0_resources_label_instance = GoogleAdsSearchads360V0ResourcesLabel.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesLabel.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_label_dict = google_ads_searchads360_v0_resources_label_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesLabel from a dict
google_ads_searchads360_v0_resources_label_from_dict = GoogleAdsSearchads360V0ResourcesLabel.from_dict(google_ads_searchads360_v0_resources_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


