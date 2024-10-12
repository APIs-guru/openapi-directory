# UpdatePersonalListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_numbers** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**privacy** | **str** |  | [optional] 
**sort_by** | **str** |  | [optional] 
**sort_how** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.update_personal_list_request import UpdatePersonalListRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePersonalListRequest from a JSON string
update_personal_list_request_instance = UpdatePersonalListRequest.from_json(json)
# print the JSON string representation of the object
print(UpdatePersonalListRequest.to_json())

# convert the object into a dict
update_personal_list_request_dict = update_personal_list_request_instance.to_dict()
# create an instance of UpdatePersonalListRequest from a dict
update_personal_list_request_from_dict = UpdatePersonalListRequest.from_dict(update_personal_list_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


