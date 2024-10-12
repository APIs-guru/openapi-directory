# BucketWebsite

The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the Static Website Examples for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**main_page_suffix** | **str** | If the requested object path is missing, the service will ensure the path has a trailing &#39;/&#39;, append this suffix, and attempt to retrieve the resulting object. This allows the creation of index.html objects to represent directory pages. | [optional] 
**not_found_page** | **str** | If the requested object path is missing, and any mainPageSuffix object is missing, if applicable, the service will return the named object from this bucket as the content for a 404 Not Found result. | [optional] 

## Example

```python
from openapi_client.models.bucket_website import BucketWebsite

# TODO update the JSON string below
json = "{}"
# create an instance of BucketWebsite from a JSON string
bucket_website_instance = BucketWebsite.from_json(json)
# print the JSON string representation of the object
print(BucketWebsite.to_json())

# convert the object into a dict
bucket_website_dict = bucket_website_instance.to_dict()
# create an instance of BucketWebsite from a dict
bucket_website_from_dict = BucketWebsite.from_dict(bucket_website_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


