# RejectsListResponseInnerSender


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**clicks** | **int** |  | [optional] 
**complaints** | **int** |  | [optional] 
**created_at** | **str** |  | [optional] 
**hard_bounces** | **int** |  | [optional] 
**opens** | **int** |  | [optional] 
**rejects** | **int** |  | [optional] 
**sent** | **int** |  | [optional] 
**soft_bounces** | **int** |  | [optional] 
**unique_clicks** | **int** |  | [optional] 
**unique_opens** | **int** |  | [optional] 
**unsubs** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.rejects_list_response_inner_sender import RejectsListResponseInnerSender

# TODO update the JSON string below
json = "{}"
# create an instance of RejectsListResponseInnerSender from a JSON string
rejects_list_response_inner_sender_instance = RejectsListResponseInnerSender.from_json(json)
# print the JSON string representation of the object
print(RejectsListResponseInnerSender.to_json())

# convert the object into a dict
rejects_list_response_inner_sender_dict = rejects_list_response_inner_sender_instance.to_dict()
# create an instance of RejectsListResponseInnerSender from a dict
rejects_list_response_inner_sender_from_dict = RejectsListResponseInnerSender.from_dict(rejects_list_response_inner_sender_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


