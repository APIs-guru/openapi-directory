# BatchConfigurationCollection

A collection of batch configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[BatchConfiguration]**](BatchConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_configuration_collection import BatchConfigurationCollection

# TODO update the JSON string below
json = "{}"
# create an instance of BatchConfigurationCollection from a JSON string
batch_configuration_collection_instance = BatchConfigurationCollection.from_json(json)
# print the JSON string representation of the object
print(BatchConfigurationCollection.to_json())

# convert the object into a dict
batch_configuration_collection_dict = batch_configuration_collection_instance.to_dict()
# create an instance of BatchConfigurationCollection from a dict
batch_configuration_collection_from_dict = BatchConfigurationCollection.from_dict(batch_configuration_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


