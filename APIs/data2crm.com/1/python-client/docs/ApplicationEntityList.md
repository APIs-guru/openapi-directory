# ApplicationEntityList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization** | **str** | Application authorization | [optional] 
**company** | [**Company**](Company.md) |  | [optional] 
**created_at** | **datetime** | Created At | [optional] 
**description** | **str** | Application description | [optional] 
**key** | **str** | Application key | [optional] 
**last_used_at** | **datetime** | Last Used At | [optional] 
**type** | **str** | Application platform type | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 
**url** | **str** | Application URL | [optional] 
**user_id** | **int** | User ID | [optional] 
**user_key** | **str** | User Key | [optional] 

## Example

```python
from openapi_client.models.application_entity_list import ApplicationEntityList

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationEntityList from a JSON string
application_entity_list_instance = ApplicationEntityList.from_json(json)
# print the JSON string representation of the object
print(ApplicationEntityList.to_json())

# convert the object into a dict
application_entity_list_dict = application_entity_list_instance.to_dict()
# create an instance of ApplicationEntityList from a dict
application_entity_list_from_dict = ApplicationEntityList.from_dict(application_entity_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


