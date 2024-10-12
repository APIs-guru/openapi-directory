# SavedAdStyles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of this response for caching purposes. | [optional] 
**items** | [**List[SavedAdStyle]**](SavedAdStyle.md) | The saved ad styles returned in this list response. | [optional] 
**kind** | **str** | Kind of list this is, in this case adsense#savedAdStyles. | [optional] [default to 'adsense#savedAdStyles']
**next_page_token** | **str** | Continuation token used to page through ad units. To retrieve the next page of results, set the next request&#39;s \&quot;pageToken\&quot; value to this. | [optional] 

## Example

```python
from openapi_client.models.saved_ad_styles import SavedAdStyles

# TODO update the JSON string below
json = "{}"
# create an instance of SavedAdStyles from a JSON string
saved_ad_styles_instance = SavedAdStyles.from_json(json)
# print the JSON string representation of the object
print(SavedAdStyles.to_json())

# convert the object into a dict
saved_ad_styles_dict = saved_ad_styles_instance.to_dict()
# create an instance of SavedAdStyles from a dict
saved_ad_styles_from_dict = SavedAdStyles.from_dict(saved_ad_styles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


