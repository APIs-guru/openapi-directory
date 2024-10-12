# Metadata

The dimensions, metrics and comparisons currently accepted in reporting methods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | [**List[DimensionMetadata]**](DimensionMetadata.md) | The dimension descriptions. | [optional] 
**metrics** | [**List[MetricMetadata]**](MetricMetadata.md) | The metric descriptions. | [optional] 
**name** | **str** | Resource name of this metadata. | [optional] 

## Example

```python
from openapi_client.models.metadata import Metadata

# TODO update the JSON string below
json = "{}"
# create an instance of Metadata from a JSON string
metadata_instance = Metadata.from_json(json)
# print the JSON string representation of the object
print(Metadata.to_json())

# convert the object into a dict
metadata_dict = metadata_instance.to_dict()
# create an instance of Metadata from a dict
metadata_from_dict = Metadata.from_dict(metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


