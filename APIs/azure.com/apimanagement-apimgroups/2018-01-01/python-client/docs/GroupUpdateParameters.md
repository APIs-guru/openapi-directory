# GroupUpdateParameters

Parameters supplied to the Update Group operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GroupUpdateParametersProperties**](GroupUpdateParametersProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.group_update_parameters import GroupUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GroupUpdateParameters from a JSON string
group_update_parameters_instance = GroupUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(GroupUpdateParameters.to_json())

# convert the object into a dict
group_update_parameters_dict = group_update_parameters_instance.to_dict()
# create an instance of GroupUpdateParameters from a dict
group_update_parameters_from_dict = GroupUpdateParameters.from_dict(group_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


