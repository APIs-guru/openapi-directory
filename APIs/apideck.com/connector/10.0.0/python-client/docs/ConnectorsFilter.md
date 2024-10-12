# ConnectorsFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**ConnectorStatus**](ConnectorStatus.md) |  | [optional] 
**unified_api** | [**UnifiedApiId**](UnifiedApiId.md) |  | [optional] 

## Example

```python
from openapi_client.models.connectors_filter import ConnectorsFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorsFilter from a JSON string
connectors_filter_instance = ConnectorsFilter.from_json(json)
# print the JSON string representation of the object
print(ConnectorsFilter.to_json())

# convert the object into a dict
connectors_filter_dict = connectors_filter_instance.to_dict()
# create an instance of ConnectorsFilter from a dict
connectors_filter_from_dict = ConnectorsFilter.from_dict(connectors_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


