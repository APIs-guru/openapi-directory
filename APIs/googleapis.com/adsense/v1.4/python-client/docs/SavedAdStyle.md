# SavedAdStyle


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_style** | [**AdStyle**](AdStyle.md) |  | [optional] 
**id** | **str** | Unique identifier of this saved ad style. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. | [optional] 
**kind** | **str** | Kind of resource this is, in this case adsense#savedAdStyle. | [optional] [default to 'adsense#savedAdStyle']
**name** | **str** | The user selected name of this SavedAdStyle. | [optional] 

## Example

```python
from openapi_client.models.saved_ad_style import SavedAdStyle

# TODO update the JSON string below
json = "{}"
# create an instance of SavedAdStyle from a JSON string
saved_ad_style_instance = SavedAdStyle.from_json(json)
# print the JSON string representation of the object
print(SavedAdStyle.to_json())

# convert the object into a dict
saved_ad_style_dict = saved_ad_style_instance.to_dict()
# create an instance of SavedAdStyle from a dict
saved_ad_style_from_dict = SavedAdStyle.from_dict(saved_ad_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


