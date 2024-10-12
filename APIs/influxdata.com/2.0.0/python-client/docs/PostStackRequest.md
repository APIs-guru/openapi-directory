# PostStackRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**org_id** | **str** |  | [optional] 
**urls** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.post_stack_request import PostStackRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostStackRequest from a JSON string
post_stack_request_instance = PostStackRequest.from_json(json)
# print the JSON string representation of the object
print(PostStackRequest.to_json())

# convert the object into a dict
post_stack_request_dict = post_stack_request_instance.to_dict()
# create an instance of PostStackRequest from a dict
post_stack_request_from_dict = PostStackRequest.from_dict(post_stack_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


