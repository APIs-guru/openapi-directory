# ConnectorCollectionInfo

Collection and ingestion information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ConnectorCollectionErrorInfo**](ConnectorCollectionErrorInfo.md) |  | [optional] 
**last_run** | **datetime** | Last time the data acquisition process completed (even if no new data was found) | [optional] [readonly] 
**last_updated** | **datetime** | Last time the external data was updated into Azure | [optional] [readonly] 
**source_last_updated** | **datetime** | Source timestamp of external data currently available in Azure (eg AWS last processed CUR file timestamp) | [optional] [readonly] 

## Example

```python
from openapi_client.models.connector_collection_info import ConnectorCollectionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorCollectionInfo from a JSON string
connector_collection_info_instance = ConnectorCollectionInfo.from_json(json)
# print the JSON string representation of the object
print(ConnectorCollectionInfo.to_json())

# convert the object into a dict
connector_collection_info_dict = connector_collection_info_instance.to_dict()
# create an instance of ConnectorCollectionInfo from a dict
connector_collection_info_from_dict = ConnectorCollectionInfo.from_dict(connector_collection_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


