# ConnectorCollectionErrorInfo

Details of any error encountered on last collection attempt

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | Short error message | [optional] [readonly] 
**error_message** | **str** | Detailed error message | [optional] [readonly] 
**error_start_time** | **datetime** | Time the error started occurring (Last time error occurred in lastRun) | [optional] [readonly] 

## Example

```python
from openapi_client.models.connector_collection_error_info import ConnectorCollectionErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorCollectionErrorInfo from a JSON string
connector_collection_error_info_instance = ConnectorCollectionErrorInfo.from_json(json)
# print the JSON string representation of the object
print(ConnectorCollectionErrorInfo.to_json())

# convert the object into a dict
connector_collection_error_info_dict = connector_collection_error_info_instance.to_dict()
# create an instance of ConnectorCollectionErrorInfo from a dict
connector_collection_error_info_from_dict = ConnectorCollectionErrorInfo.from_dict(connector_collection_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


