# ConnectorDoc


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | **str** | Audience for the doc. | [optional] 
**format** | **str** | Format of the doc. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**name** | **str** | Name of the doc. | [optional] 
**url** | **str** | Link to fetch the content of the doc. | [optional] 

## Example

```python
from openapi_client.models.connector_doc import ConnectorDoc

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorDoc from a JSON string
connector_doc_instance = ConnectorDoc.from_json(json)
# print the JSON string representation of the object
print(ConnectorDoc.to_json())

# convert the object into a dict
connector_doc_dict = connector_doc_instance.to_dict()
# create an instance of ConnectorDoc from a dict
connector_doc_from_dict = ConnectorDoc.from_dict(connector_doc_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


