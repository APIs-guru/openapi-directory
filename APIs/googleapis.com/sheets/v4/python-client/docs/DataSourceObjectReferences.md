# DataSourceObjectReferences

A list of references to data source objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**references** | [**List[DataSourceObjectReference]**](DataSourceObjectReference.md) | The references. | [optional] 

## Example

```python
from openapi_client.models.data_source_object_references import DataSourceObjectReferences

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceObjectReferences from a JSON string
data_source_object_references_instance = DataSourceObjectReferences.from_json(json)
# print the JSON string representation of the object
print(DataSourceObjectReferences.to_json())

# convert the object into a dict
data_source_object_references_dict = data_source_object_references_instance.to_dict()
# create an instance of DataSourceObjectReferences from a dict
data_source_object_references_from_dict = DataSourceObjectReferences.from_dict(data_source_object_references_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


