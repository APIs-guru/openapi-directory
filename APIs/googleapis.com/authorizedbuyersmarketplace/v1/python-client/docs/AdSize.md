# AdSize

Represents size of a single ad slot, or a creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **str** | The height of the ad slot in pixels. This field will be present only when size type is &#x60;PIXEL&#x60;. | [optional] 
**type** | **str** | The type of the ad slot size. | [optional] 
**width** | **str** | The width of the ad slot in pixels. This field will be present only when size type is &#x60;PIXEL&#x60;. | [optional] 

## Example

```python
from openapi_client.models.ad_size import AdSize

# TODO update the JSON string below
json = "{}"
# create an instance of AdSize from a JSON string
ad_size_instance = AdSize.from_json(json)
# print the JSON string representation of the object
print(AdSize.to_json())

# convert the object into a dict
ad_size_dict = ad_size_instance.to_dict()
# create an instance of AdSize from a dict
ad_size_from_dict = AdSize.from_dict(ad_size_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


