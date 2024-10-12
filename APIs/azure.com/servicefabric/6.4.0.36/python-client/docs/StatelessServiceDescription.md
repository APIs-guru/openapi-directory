# StatelessServiceDescription

Describes a stateless service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_count** | **int** | The instance count. | 

## Example

```python
from openapi_client.models.stateless_service_description import StatelessServiceDescription

# TODO update the JSON string below
json = "{}"
# create an instance of StatelessServiceDescription from a JSON string
stateless_service_description_instance = StatelessServiceDescription.from_json(json)
# print the JSON string representation of the object
print(StatelessServiceDescription.to_json())

# convert the object into a dict
stateless_service_description_dict = stateless_service_description_instance.to_dict()
# create an instance of StatelessServiceDescription from a dict
stateless_service_description_from_dict = StatelessServiceDescription.from_dict(stateless_service_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


