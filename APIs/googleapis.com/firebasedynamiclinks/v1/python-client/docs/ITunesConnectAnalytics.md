# ITunesConnectAnalytics

Parameters for iTunes Connect App Analytics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at** | **str** | Affiliate token used to create affiliate-coded links. | [optional] 
**ct** | **str** | Campaign text that developers can optionally add to any link in order to track sales from a specific marketing campaign. | [optional] 
**mt** | **str** | iTune media types, including music, podcasts, audiobooks and so on. | [optional] 
**pt** | **str** | Provider token that enables analytics for Dynamic Links from within iTunes Connect. | [optional] 

## Example

```python
from openapi_client.models.i_tunes_connect_analytics import ITunesConnectAnalytics

# TODO update the JSON string below
json = "{}"
# create an instance of ITunesConnectAnalytics from a JSON string
i_tunes_connect_analytics_instance = ITunesConnectAnalytics.from_json(json)
# print the JSON string representation of the object
print(ITunesConnectAnalytics.to_json())

# convert the object into a dict
i_tunes_connect_analytics_dict = i_tunes_connect_analytics_instance.to_dict()
# create an instance of ITunesConnectAnalytics from a dict
i_tunes_connect_analytics_from_dict = ITunesConnectAnalytics.from_dict(i_tunes_connect_analytics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


