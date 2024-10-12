# MetadataLabels

Defines a name-pair value for a single label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label_name** | **str** | Required. Label name presented as key in xDS Node Metadata. | [optional] 
**label_value** | **str** | Required. Label value presented as value corresponding to the above key, in xDS Node Metadata. | [optional] 

## Example

```python
from openapi_client.models.metadata_labels import MetadataLabels

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataLabels from a JSON string
metadata_labels_instance = MetadataLabels.from_json(json)
# print the JSON string representation of the object
print(MetadataLabels.to_json())

# convert the object into a dict
metadata_labels_dict = metadata_labels_instance.to_dict()
# create an instance of MetadataLabels from a dict
metadata_labels_from_dict = MetadataLabels.from_dict(metadata_labels_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


