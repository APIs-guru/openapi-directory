# NonSkippableAd

Details for a non-skippable ad.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_in_stream_attribute** | [**CommonInStreamAttribute**](CommonInStreamAttribute.md) |  | [optional] 
**custom_parameters** | **Dict[str, str]** | The custom parameters to pass custom values to tracking URL template. | [optional] 

## Example

```python
from openapi_client.models.non_skippable_ad import NonSkippableAd

# TODO update the JSON string below
json = "{}"
# create an instance of NonSkippableAd from a JSON string
non_skippable_ad_instance = NonSkippableAd.from_json(json)
# print the JSON string representation of the object
print(NonSkippableAd.to_json())

# convert the object into a dict
non_skippable_ad_dict = non_skippable_ad_instance.to_dict()
# create an instance of NonSkippableAd from a dict
non_skippable_ad_from_dict = NonSkippableAd.from_dict(non_skippable_ad_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


