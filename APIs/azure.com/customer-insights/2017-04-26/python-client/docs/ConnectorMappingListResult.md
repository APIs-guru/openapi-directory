# ConnectorMappingListResult

The response of list connector mapping operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. | [optional] 
**value** | [**List[ConnectorMappingResourceFormat]**](ConnectorMappingResourceFormat.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.connector_mapping_list_result import ConnectorMappingListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorMappingListResult from a JSON string
connector_mapping_list_result_instance = ConnectorMappingListResult.from_json(json)
# print the JSON string representation of the object
print(ConnectorMappingListResult.to_json())

# convert the object into a dict
connector_mapping_list_result_dict = connector_mapping_list_result_instance.to_dict()
# create an instance of ConnectorMappingListResult from a dict
connector_mapping_list_result_from_dict = ConnectorMappingListResult.from_dict(connector_mapping_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


