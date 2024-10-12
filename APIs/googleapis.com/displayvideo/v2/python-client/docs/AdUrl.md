# AdUrl

Additional URLs related to the ad, including beacons.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of the Ad URL. | [optional] 
**url** | **str** | The URL string value. | [optional] 

## Example

```python
from openapi_client.models.ad_url import AdUrl

# TODO update the JSON string below
json = "{}"
# create an instance of AdUrl from a JSON string
ad_url_instance = AdUrl.from_json(json)
# print the JSON string representation of the object
print(AdUrl.to_json())

# convert the object into a dict
ad_url_dict = ad_url_instance.to_dict()
# create an instance of AdUrl from a dict
ad_url_from_dict = AdUrl.from_dict(ad_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


