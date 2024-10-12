# TagsInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clicks** | **int** |  | [optional] 
**complaints** | **int** |  | [optional] 
**hard_bounces** | **int** |  | [optional] 
**opens** | **int** |  | [optional] 
**rejects** | **int** |  | [optional] 
**sent** | **int** |  | [optional] 
**soft_bounces** | **int** |  | [optional] 
**stats** | [**SendersInfoResponseStats**](SendersInfoResponseStats.md) |  | [optional] 
**tag** | **str** |  | [optional] 
**unsubs** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.tags_info_response import TagsInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TagsInfoResponse from a JSON string
tags_info_response_instance = TagsInfoResponse.from_json(json)
# print the JSON string representation of the object
print(TagsInfoResponse.to_json())

# convert the object into a dict
tags_info_response_dict = tags_info_response_instance.to_dict()
# create an instance of TagsInfoResponse from a dict
tags_info_response_from_dict = TagsInfoResponse.from_dict(tags_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


