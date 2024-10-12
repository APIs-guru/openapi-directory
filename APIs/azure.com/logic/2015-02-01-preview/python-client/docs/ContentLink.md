# ContentLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_hash** | [**ContentHash**](ContentHash.md) |  | [optional] 
**content_size** | **int** | Gets or sets the content size. | [optional] 
**content_version** | **str** | Gets or sets the content version. | [optional] 
**metadata** | **object** |  | [optional] 
**uri** | **str** | Gets or sets the content link URI. | [optional] 

## Example

```python
from openapi_client.models.content_link import ContentLink

# TODO update the JSON string below
json = "{}"
# create an instance of ContentLink from a JSON string
content_link_instance = ContentLink.from_json(json)
# print the JSON string representation of the object
print(ContentLink.to_json())

# convert the object into a dict
content_link_dict = content_link_instance.to_dict()
# create an instance of ContentLink from a dict
content_link_from_dict = ContentLink.from_dict(content_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


