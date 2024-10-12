# DeleteTagFromGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**force** | **bool** | force delete tag that has entities (default is &#x60;false&#x60;). | [optional] 
**key** | **str** | Valid tag key. | [optional] 
**value** | **str** | Valid tag value. | [optional] 

## Example

```python
from openapi_client.models.delete_tag_from_group_request import DeleteTagFromGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteTagFromGroupRequest from a JSON string
delete_tag_from_group_request_instance = DeleteTagFromGroupRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteTagFromGroupRequest.to_json())

# convert the object into a dict
delete_tag_from_group_request_dict = delete_tag_from_group_request_instance.to_dict()
# create an instance of DeleteTagFromGroupRequest from a dict
delete_tag_from_group_request_from_dict = DeleteTagFromGroupRequest.from_dict(delete_tag_from_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


