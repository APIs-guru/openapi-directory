# BlogLocale

The locale this Blog is set to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The country this blog&#39;s locale is set to. | [optional] 
**language** | **str** | The language this blog is authored in. | [optional] 
**variant** | **str** | The language variant this blog is authored in. | [optional] 

## Example

```python
from openapi_client.models.blog_locale import BlogLocale

# TODO update the JSON string below
json = "{}"
# create an instance of BlogLocale from a JSON string
blog_locale_instance = BlogLocale.from_json(json)
# print the JSON string representation of the object
print(BlogLocale.to_json())

# convert the object into a dict
blog_locale_dict = blog_locale_instance.to_dict()
# create an instance of BlogLocale from a dict
blog_locale_from_dict = BlogLocale.from_dict(blog_locale_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


