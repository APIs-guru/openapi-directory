# DedicatedCapacityAdministrators

An array of administrator user identities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | **List[str]** | An array of administrator user identities. | [optional] 

## Example

```python
from openapi_client.models.dedicated_capacity_administrators import DedicatedCapacityAdministrators

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedCapacityAdministrators from a JSON string
dedicated_capacity_administrators_instance = DedicatedCapacityAdministrators.from_json(json)
# print the JSON string representation of the object
print(DedicatedCapacityAdministrators.to_json())

# convert the object into a dict
dedicated_capacity_administrators_dict = dedicated_capacity_administrators_instance.to_dict()
# create an instance of DedicatedCapacityAdministrators from a dict
dedicated_capacity_administrators_from_dict = DedicatedCapacityAdministrators.from_dict(dedicated_capacity_administrators_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


