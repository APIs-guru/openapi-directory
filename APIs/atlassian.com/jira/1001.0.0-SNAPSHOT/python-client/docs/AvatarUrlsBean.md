# AvatarUrlsBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_16x16** | **str** | The URL of the item&#39;s 16x16 pixel avatar. | [optional] 
**var_24x24** | **str** | The URL of the item&#39;s 24x24 pixel avatar. | [optional] 
**var_32x32** | **str** | The URL of the item&#39;s 32x32 pixel avatar. | [optional] 
**var_48x48** | **str** | The URL of the item&#39;s 48x48 pixel avatar. | [optional] 

## Example

```python
from openapi_client.models.avatar_urls_bean import AvatarUrlsBean

# TODO update the JSON string below
json = "{}"
# create an instance of AvatarUrlsBean from a JSON string
avatar_urls_bean_instance = AvatarUrlsBean.from_json(json)
# print the JSON string representation of the object
print(AvatarUrlsBean.to_json())

# convert the object into a dict
avatar_urls_bean_dict = avatar_urls_bean_instance.to_dict()
# create an instance of AvatarUrlsBean from a dict
avatar_urls_bean_from_dict = AvatarUrlsBean.from_dict(avatar_urls_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


