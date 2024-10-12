# ConnectorListResult

The response of list connector operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. | [optional] 
**value** | [**List[ConnectorResourceFormat]**](ConnectorResourceFormat.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.connector_list_result import ConnectorListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorListResult from a JSON string
connector_list_result_instance = ConnectorListResult.from_json(json)
# print the JSON string representation of the object
print(ConnectorListResult.to_json())

# convert the object into a dict
connector_list_result_dict = connector_list_result_instance.to_dict()
# create an instance of ConnectorListResult from a dict
connector_list_result_from_dict = ConnectorListResult.from_dict(connector_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


