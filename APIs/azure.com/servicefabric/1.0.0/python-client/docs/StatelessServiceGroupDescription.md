# StatelessServiceGroupDescription

The description of the stateless service group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.stateless_service_group_description import StatelessServiceGroupDescription

# TODO update the JSON string below
json = "{}"
# create an instance of StatelessServiceGroupDescription from a JSON string
stateless_service_group_description_instance = StatelessServiceGroupDescription.from_json(json)
# print the JSON string representation of the object
print(StatelessServiceGroupDescription.to_json())

# convert the object into a dict
stateless_service_group_description_dict = stateless_service_group_description_instance.to_dict()
# create an instance of StatelessServiceGroupDescription from a dict
stateless_service_group_description_from_dict = StatelessServiceGroupDescription.from_dict(stateless_service_group_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


