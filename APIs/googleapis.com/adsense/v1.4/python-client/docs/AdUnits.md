# AdUnits


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of this response for caching purposes. | [optional] 
**items** | [**List[AdUnit]**](AdUnit.md) | The ad units returned in this list response. | [optional] 
**kind** | **str** | Kind of list this is, in this case adsense#adUnits. | [optional] [default to 'adsense#adUnits']
**next_page_token** | **str** | Continuation token used to page through ad units. To retrieve the next page of results, set the next request&#39;s \&quot;pageToken\&quot; value to this. | [optional] 

## Example

```python
from openapi_client.models.ad_units import AdUnits

# TODO update the JSON string below
json = "{}"
# create an instance of AdUnits from a JSON string
ad_units_instance = AdUnits.from_json(json)
# print the JSON string representation of the object
print(AdUnits.to_json())

# convert the object into a dict
ad_units_dict = ad_units_instance.to_dict()
# create an instance of AdUnits from a dict
ad_units_from_dict = AdUnits.from_dict(ad_units_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


