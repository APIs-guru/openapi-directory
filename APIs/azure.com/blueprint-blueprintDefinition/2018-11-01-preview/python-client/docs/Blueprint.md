# Blueprint

Represents a Blueprint definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BlueprintProperties**](BlueprintProperties.md) |  | 
**id** | **str** | String Id used to locate any resource on Azure. | [optional] [readonly] 
**name** | **str** | Name of this resource. | [optional] [readonly] 
**type** | **str** | Type of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.blueprint import Blueprint

# TODO update the JSON string below
json = "{}"
# create an instance of Blueprint from a JSON string
blueprint_instance = Blueprint.from_json(json)
# print the JSON string representation of the object
print(Blueprint.to_json())

# convert the object into a dict
blueprint_dict = blueprint_instance.to_dict()
# create an instance of Blueprint from a dict
blueprint_from_dict = Blueprint.from_dict(blueprint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


