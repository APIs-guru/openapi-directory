# StatefulServiceInfo

Information about a stateful Service Fabric service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_persisted_state** | **bool** | Whether the service has persisted state. | [optional] 

## Example

```python
from openapi_client.models.stateful_service_info import StatefulServiceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of StatefulServiceInfo from a JSON string
stateful_service_info_instance = StatefulServiceInfo.from_json(json)
# print the JSON string representation of the object
print(StatefulServiceInfo.to_json())

# convert the object into a dict
stateful_service_info_dict = stateful_service_info_instance.to_dict()
# create an instance of StatefulServiceInfo from a dict
stateful_service_info_from_dict = StatefulServiceInfo.from_dict(stateful_service_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


