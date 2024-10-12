# AmpUrl

AMP URL response for a requested URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amp_url** | **str** | The AMP URL pointing to the publisher&#39;s web server. | [optional] 
**cdn_amp_url** | **str** | The [AMP Cache URL](/amp/cache/overview#amp-cache-url-format) pointing to the cached document in the Google AMP Cache. | [optional] 
**original_url** | **str** | The original non-AMP URL. | [optional] 

## Example

```python
from openapi_client.models.amp_url import AmpUrl

# TODO update the JSON string below
json = "{}"
# create an instance of AmpUrl from a JSON string
amp_url_instance = AmpUrl.from_json(json)
# print the JSON string representation of the object
print(AmpUrl.to_json())

# convert the object into a dict
amp_url_dict = amp_url_instance.to_dict()
# create an instance of AmpUrl from a dict
amp_url_from_dict = AmpUrl.from_dict(amp_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


