# ApplicationEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization** | **str** | Application authorization | [optional] 
**company** | [**Company**](Company.md) |  | [optional] 
**created_at** | **datetime** | Created At | [optional] 
**description** | **str** | Application description | [optional] 
**is_authorized** | **bool** | Is Authorized | [optional] 
**key** | **str** | Application key | [optional] 
**last_used_at** | **datetime** | Last Used At | [optional] 
**me** | [**UserEntity**](UserEntity.md) |  | [optional] 
**plan** | **str** | Application Plan | [optional] 
**requests_limit** | [**RequestsLimit**](RequestsLimit.md) |  | [optional] 
**type** | **str** | Application platform type | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 
**url** | **str** | Application URL | [optional] 
**user_id** | **int** | User ID | [optional] 
**user_key** | **str** | User Key | [optional] 

## Example

```python
from openapi_client.models.application_entity import ApplicationEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationEntity from a JSON string
application_entity_instance = ApplicationEntity.from_json(json)
# print the JSON string representation of the object
print(ApplicationEntity.to_json())

# convert the object into a dict
application_entity_dict = application_entity_instance.to_dict()
# create an instance of ApplicationEntity from a dict
application_entity_from_dict = ApplicationEntity.from_dict(application_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


