# StatelessServiceUpdateDescription

Describes an update for a stateless service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_count** | **int** | The instance count. | [optional] 

## Example

```python
from openapi_client.models.stateless_service_update_description import StatelessServiceUpdateDescription

# TODO update the JSON string below
json = "{}"
# create an instance of StatelessServiceUpdateDescription from a JSON string
stateless_service_update_description_instance = StatelessServiceUpdateDescription.from_json(json)
# print the JSON string representation of the object
print(StatelessServiceUpdateDescription.to_json())

# convert the object into a dict
stateless_service_update_description_dict = stateless_service_update_description_instance.to_dict()
# create an instance of StatelessServiceUpdateDescription from a dict
stateless_service_update_description_from_dict = StatelessServiceUpdateDescription.from_dict(stateless_service_update_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


