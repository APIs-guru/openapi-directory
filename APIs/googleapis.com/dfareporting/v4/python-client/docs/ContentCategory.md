# ContentCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this content category. This is a read-only field that can be left blank. | [optional] 
**id** | **str** | ID of this content category. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#contentCategory\&quot;. | [optional] 
**name** | **str** | Name of this content category. This is a required field and must be less than 256 characters long and unique among content categories of the same account. | [optional] 

## Example

```python
from openapi_client.models.content_category import ContentCategory

# TODO update the JSON string below
json = "{}"
# create an instance of ContentCategory from a JSON string
content_category_instance = ContentCategory.from_json(json)
# print the JSON string representation of the object
print(ContentCategory.to_json())

# convert the object into a dict
content_category_dict = content_category_instance.to_dict()
# create an instance of ContentCategory from a dict
content_category_from_dict = ContentCategory.from_dict(content_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


