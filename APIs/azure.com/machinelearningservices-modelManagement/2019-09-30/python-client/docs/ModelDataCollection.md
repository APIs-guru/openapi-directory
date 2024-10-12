# ModelDataCollection

The Model data collection properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_hub_enabled** | **bool** | Option for enabling/disabling Event Hub. | [optional] 
**storage_enabled** | **bool** | Option for enabling/disabling storage. | [optional] 

## Example

```python
from openapi_client.models.model_data_collection import ModelDataCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ModelDataCollection from a JSON string
model_data_collection_instance = ModelDataCollection.from_json(json)
# print the JSON string representation of the object
print(ModelDataCollection.to_json())

# convert the object into a dict
model_data_collection_dict = model_data_collection_instance.to_dict()
# create an instance of ModelDataCollection from a dict
model_data_collection_from_dict = ModelDataCollection.from_dict(model_data_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


