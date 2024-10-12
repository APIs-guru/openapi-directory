# GetGroupTopicByID200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stat** | **str** |  | [optional] 
**topic** | [**Topic**](Topic.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_group_topic_by_id200_response import GetGroupTopicByID200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetGroupTopicByID200Response from a JSON string
get_group_topic_by_id200_response_instance = GetGroupTopicByID200Response.from_json(json)
# print the JSON string representation of the object
print(GetGroupTopicByID200Response.to_json())

# convert the object into a dict
get_group_topic_by_id200_response_dict = get_group_topic_by_id200_response_instance.to_dict()
# create an instance of GetGroupTopicByID200Response from a dict
get_group_topic_by_id200_response_from_dict = GetGroupTopicByID200Response.from_dict(get_group_topic_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


