# StorageClassificationProperties

Storage object properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**friendly_name** | **str** | Friendly name of the Storage classification. | [optional] 

## Example

```python
from openapi_client.models.storage_classification_properties import StorageClassificationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StorageClassificationProperties from a JSON string
storage_classification_properties_instance = StorageClassificationProperties.from_json(json)
# print the JSON string representation of the object
print(StorageClassificationProperties.to_json())

# convert the object into a dict
storage_classification_properties_dict = storage_classification_properties_instance.to_dict()
# create an instance of StorageClassificationProperties from a dict
storage_classification_properties_from_dict = StorageClassificationProperties.from_dict(storage_classification_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


