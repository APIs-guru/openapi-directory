# StandardIsolation

Standard options for isolating this app profile's traffic from other use cases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**priority** | **str** | The priority of requests sent using this app profile. | [optional] 

## Example

```python
from openapi_client.models.standard_isolation import StandardIsolation

# TODO update the JSON string below
json = "{}"
# create an instance of StandardIsolation from a JSON string
standard_isolation_instance = StandardIsolation.from_json(json)
# print the JSON string representation of the object
print(StandardIsolation.to_json())

# convert the object into a dict
standard_isolation_dict = standard_isolation_instance.to_dict()
# create an instance of StandardIsolation from a dict
standard_isolation_from_dict = StandardIsolation.from_dict(standard_isolation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


