# DataStoreProperties

Data Store for sources and sinks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_secrets** | [**List[CustomerSecret]**](CustomerSecret.md) | List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys. | [optional] 
**data_store_type_id** | **str** | The arm id of the data store type. | 
**extended_properties** | **object** | A generic json used differently by each data source type. | [optional] 
**repository_id** | **str** | Arm Id for the manager resource to which the data source is associated. This is optional. | [optional] 
**state** | **str** | State of the data source. | 

## Example

```python
from openapi_client.models.data_store_properties import DataStoreProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataStoreProperties from a JSON string
data_store_properties_instance = DataStoreProperties.from_json(json)
# print the JSON string representation of the object
print(DataStoreProperties.to_json())

# convert the object into a dict
data_store_properties_dict = data_store_properties_instance.to_dict()
# create an instance of DataStoreProperties from a dict
data_store_properties_from_dict = DataStoreProperties.from_dict(data_store_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


