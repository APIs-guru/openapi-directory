# AddATagToAProjectRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Alphanumeric including - and _ with a limit of 30 characters | [optional] 
**value** | **str** | Alphanumeric including - and _ with a limit of 50 characters | [optional] 

## Example

```python
from openapi_client.models.add_a_tag_to_a_project_request import AddATagToAProjectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddATagToAProjectRequest from a JSON string
add_a_tag_to_a_project_request_instance = AddATagToAProjectRequest.from_json(json)
# print the JSON string representation of the object
print(AddATagToAProjectRequest.to_json())

# convert the object into a dict
add_a_tag_to_a_project_request_dict = add_a_tag_to_a_project_request_instance.to_dict()
# create an instance of AddATagToAProjectRequest from a dict
add_a_tag_to_a_project_request_from_dict = AddATagToAProjectRequest.from_dict(add_a_tag_to_a_project_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


