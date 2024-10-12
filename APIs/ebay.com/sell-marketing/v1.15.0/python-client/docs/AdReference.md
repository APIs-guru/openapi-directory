# AdReference

This type defines the fields for an ad ID and its associated URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_id** | **str** | A unique eBay-assigned ID for an ad. This ID is generated when an ad is created. | [optional] 
**href** | **str** | The getAd URI of an ad. You can use this URI to retrieve the ad. | [optional] 

## Example

```python
from openapi_client.models.ad_reference import AdReference

# TODO update the JSON string below
json = "{}"
# create an instance of AdReference from a JSON string
ad_reference_instance = AdReference.from_json(json)
# print the JSON string representation of the object
print(AdReference.to_json())

# convert the object into a dict
ad_reference_dict = ad_reference_instance.to_dict()
# create an instance of AdReference from a dict
ad_reference_from_dict = AdReference.from_dict(ad_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


