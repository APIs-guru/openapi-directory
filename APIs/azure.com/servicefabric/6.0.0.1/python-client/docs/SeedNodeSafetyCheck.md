# SeedNodeSafetyCheck

Represents a safety check for the seed nodes being performed by service fabric before continuing with node level operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.seed_node_safety_check import SeedNodeSafetyCheck

# TODO update the JSON string below
json = "{}"
# create an instance of SeedNodeSafetyCheck from a JSON string
seed_node_safety_check_instance = SeedNodeSafetyCheck.from_json(json)
# print the JSON string representation of the object
print(SeedNodeSafetyCheck.to_json())

# convert the object into a dict
seed_node_safety_check_dict = seed_node_safety_check_instance.to_dict()
# create an instance of SeedNodeSafetyCheck from a dict
seed_node_safety_check_from_dict = SeedNodeSafetyCheck.from_dict(seed_node_safety_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


