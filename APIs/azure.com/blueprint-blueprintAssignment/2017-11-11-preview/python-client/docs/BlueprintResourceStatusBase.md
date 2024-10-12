# BlueprintResourceStatusBase

Shared status properties between all Blueprint resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_modified** | **str** | Last modified time of this blueprint. | [optional] [readonly] 
**time_created** | **str** | Creation time of this blueprint. | [optional] [readonly] 

## Example

```python
from openapi_client.models.blueprint_resource_status_base import BlueprintResourceStatusBase

# TODO update the JSON string below
json = "{}"
# create an instance of BlueprintResourceStatusBase from a JSON string
blueprint_resource_status_base_instance = BlueprintResourceStatusBase.from_json(json)
# print the JSON string representation of the object
print(BlueprintResourceStatusBase.to_json())

# convert the object into a dict
blueprint_resource_status_base_dict = blueprint_resource_status_base_instance.to_dict()
# create an instance of BlueprintResourceStatusBase from a dict
blueprint_resource_status_base_from_dict = BlueprintResourceStatusBase.from_dict(blueprint_resource_status_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


