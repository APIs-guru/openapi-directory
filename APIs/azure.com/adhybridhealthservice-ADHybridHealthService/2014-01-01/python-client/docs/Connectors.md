# Connectors

The list of connects for a service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Connector]**](Connector.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.connectors import Connectors

# TODO update the JSON string below
json = "{}"
# create an instance of Connectors from a JSON string
connectors_instance = Connectors.from_json(json)
# print the JSON string representation of the object
print(Connectors.to_json())

# convert the object into a dict
connectors_dict = connectors_instance.to_dict()
# create an instance of Connectors from a dict
connectors_from_dict = Connectors.from_dict(connectors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


