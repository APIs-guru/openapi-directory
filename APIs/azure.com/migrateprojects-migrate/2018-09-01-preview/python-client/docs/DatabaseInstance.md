# DatabaseInstance

DatabaseInstance REST resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets or sets the relative URL to get to this REST resource. | [optional] 
**name** | **str** | Gets or sets the name of this REST resource. | [optional] 
**properties** | [**DatabaseInstanceProperties**](DatabaseInstanceProperties.md) |  | [optional] 
**type** | **str** | Gets the type of this REST resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_instance import DatabaseInstance

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseInstance from a JSON string
database_instance_instance = DatabaseInstance.from_json(json)
# print the JSON string representation of the object
print(DatabaseInstance.to_json())

# convert the object into a dict
database_instance_dict = database_instance_instance.to_dict()
# create an instance of DatabaseInstance from a dict
database_instance_from_dict = DatabaseInstance.from_dict(database_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


