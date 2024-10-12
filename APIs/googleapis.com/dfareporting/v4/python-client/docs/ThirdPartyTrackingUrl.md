# ThirdPartyTrackingUrl

Third-party Tracking URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**third_party_url_type** | **str** | Third-party URL type for in-stream video and in-stream audio creatives. | [optional] 
**url** | **str** | URL for the specified third-party URL type. | [optional] 

## Example

```python
from openapi_client.models.third_party_tracking_url import ThirdPartyTrackingUrl

# TODO update the JSON string below
json = "{}"
# create an instance of ThirdPartyTrackingUrl from a JSON string
third_party_tracking_url_instance = ThirdPartyTrackingUrl.from_json(json)
# print the JSON string representation of the object
print(ThirdPartyTrackingUrl.to_json())

# convert the object into a dict
third_party_tracking_url_dict = third_party_tracking_url_instance.to_dict()
# create an instance of ThirdPartyTrackingUrl from a dict
third_party_tracking_url_from_dict = ThirdPartyTrackingUrl.from_dict(third_party_tracking_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


