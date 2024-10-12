# SasPortalChannelWithScore

The channel with score.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency_range** | [**SasPortalFrequencyRange**](SasPortalFrequencyRange.md) |  | [optional] 
**score** | **float** | The channel score, normalized to be in the range [0,100]. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_channel_with_score import SasPortalChannelWithScore

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalChannelWithScore from a JSON string
sas_portal_channel_with_score_instance = SasPortalChannelWithScore.from_json(json)
# print the JSON string representation of the object
print(SasPortalChannelWithScore.to_json())

# convert the object into a dict
sas_portal_channel_with_score_dict = sas_portal_channel_with_score_instance.to_dict()
# create an instance of SasPortalChannelWithScore from a dict
sas_portal_channel_with_score_from_dict = SasPortalChannelWithScore.from_dict(sas_portal_channel_with_score_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


