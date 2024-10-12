# BlueprintStatus

The status of the blueprint. This field is readonly.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_modified** | **datetime** | Last modified time of this blueprint definition. | [optional] [readonly] 
**time_created** | **datetime** | Creation time of this blueprint definition. | [optional] [readonly] 

## Example

```python
from openapi_client.models.blueprint_status import BlueprintStatus

# TODO update the JSON string below
json = "{}"
# create an instance of BlueprintStatus from a JSON string
blueprint_status_instance = BlueprintStatus.from_json(json)
# print the JSON string representation of the object
print(BlueprintStatus.to_json())

# convert the object into a dict
blueprint_status_dict = blueprint_status_instance.to_dict()
# create an instance of BlueprintStatus from a dict
blueprint_status_from_dict = BlueprintStatus.from_dict(blueprint_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


