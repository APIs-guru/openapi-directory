# ContentType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_label** | **str** |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**model** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.content_type import ContentType

# TODO update the JSON string below
json = "{}"
# create an instance of ContentType from a JSON string
content_type_instance = ContentType.from_json(json)
# print the JSON string representation of the object
print(ContentType.to_json())

# convert the object into a dict
content_type_dict = content_type_instance.to_dict()
# create an instance of ContentType from a dict
content_type_from_dict = ContentType.from_dict(content_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


