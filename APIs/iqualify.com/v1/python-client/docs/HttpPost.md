# HttpPost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[DocumentResponse]**](DocumentResponse.md) |  | [optional] 
**content** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**email** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**is_facilitator_post** | **bool** |  | [optional] 
**moderation** | [**Moderation**](Moderation.md) |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.http_post import HttpPost

# TODO update the JSON string below
json = "{}"
# create an instance of HttpPost from a JSON string
http_post_instance = HttpPost.from_json(json)
# print the JSON string representation of the object
print(HttpPost.to_json())

# convert the object into a dict
http_post_dict = http_post_instance.to_dict()
# create an instance of HttpPost from a dict
http_post_from_dict = HttpPost.from_dict(http_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


