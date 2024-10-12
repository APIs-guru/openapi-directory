# CreatePersonalListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_comments** | **bool** |  | [optional] 
**description** | **str** |  | [optional] 
**display_numbers** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**privacy** | **str** |  | [optional] 
**sort_by** | **str** |  | [optional] 
**sort_how** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_personal_list_request import CreatePersonalListRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePersonalListRequest from a JSON string
create_personal_list_request_instance = CreatePersonalListRequest.from_json(json)
# print the JSON string representation of the object
print(CreatePersonalListRequest.to_json())

# convert the object into a dict
create_personal_list_request_dict = create_personal_list_request_instance.to_dict()
# create an instance of CreatePersonalListRequest from a dict
create_personal_list_request_from_dict = CreatePersonalListRequest.from_dict(create_personal_list_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


