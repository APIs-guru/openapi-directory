# OriginUri

The origin URI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dash** | **str** | Dash manifest URI. If multiple Dash manifests are created, only the first one is listed. | [optional] 
**hls** | **str** | HLS manifest URI per https://tools.ietf.org/html/rfc8216#section-4.3.4. If multiple HLS manifests are created, only the first one is listed. | [optional] 

## Example

```python
from openapi_client.models.origin_uri import OriginUri

# TODO update the JSON string below
json = "{}"
# create an instance of OriginUri from a JSON string
origin_uri_instance = OriginUri.from_json(json)
# print the JSON string representation of the object
print(OriginUri.to_json())

# convert the object into a dict
origin_uri_dict = origin_uri_instance.to_dict()
# create an instance of OriginUri from a dict
origin_uri_from_dict = OriginUri.from_dict(origin_uri_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


