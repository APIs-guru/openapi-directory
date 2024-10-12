# ConnectionMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.connection_metadata import ConnectionMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMetadata from a JSON string
connection_metadata_instance = ConnectionMetadata.from_json(json)
# print the JSON string representation of the object
print(ConnectionMetadata.to_json())

# convert the object into a dict
connection_metadata_dict = connection_metadata_instance.to_dict()
# create an instance of ConnectionMetadata from a dict
connection_metadata_from_dict = ConnectionMetadata.from_dict(connection_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


