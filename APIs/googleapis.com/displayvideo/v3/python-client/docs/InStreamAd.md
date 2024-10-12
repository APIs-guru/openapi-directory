# InStreamAd

Details for an in-stream ad.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_in_stream_attribute** | [**CommonInStreamAttribute**](CommonInStreamAttribute.md) |  | [optional] 
**custom_parameters** | **Dict[str, str]** | The custom parameters to pass custom values to tracking URL template. | [optional] 

## Example

```python
from openapi_client.models.in_stream_ad import InStreamAd

# TODO update the JSON string below
json = "{}"
# create an instance of InStreamAd from a JSON string
in_stream_ad_instance = InStreamAd.from_json(json)
# print the JSON string representation of the object
print(InStreamAd.to_json())

# convert the object into a dict
in_stream_ad_dict = in_stream_ad_instance.to_dict()
# create an instance of InStreamAd from a dict
in_stream_ad_from_dict = InStreamAd.from_dict(in_stream_ad_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


