# UrlRestriction

Deprecated. This will be removed in October 2023. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Represents the URL restriction (for the URL captured by the pixel callback) for a user list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**restriction_type** | **str** | The restriction type for the specified URL. | [optional] 
**start_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**url** | **str** | Required. The URL to use for applying the restriction on the user list. | [optional] 

## Example

```python
from openapi_client.models.url_restriction import UrlRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of UrlRestriction from a JSON string
url_restriction_instance = UrlRestriction.from_json(json)
# print the JSON string representation of the object
print(UrlRestriction.to_json())

# convert the object into a dict
url_restriction_dict = url_restriction_instance.to_dict()
# create an instance of UrlRestriction from a dict
url_restriction_from_dict = UrlRestriction.from_dict(url_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


