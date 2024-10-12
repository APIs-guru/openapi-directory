# EndpointMatcherMetadataLabelMatcherMetadataLabels

Defines a name-pair value for a single label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label_name** | **str** | Required. Label name presented as key in xDS Node Metadata. | [optional] 
**label_value** | **str** | Required. Label value presented as value corresponding to the above key, in xDS Node Metadata. | [optional] 

## Example

```python
from openapi_client.models.endpoint_matcher_metadata_label_matcher_metadata_labels import EndpointMatcherMetadataLabelMatcherMetadataLabels

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointMatcherMetadataLabelMatcherMetadataLabels from a JSON string
endpoint_matcher_metadata_label_matcher_metadata_labels_instance = EndpointMatcherMetadataLabelMatcherMetadataLabels.from_json(json)
# print the JSON string representation of the object
print(EndpointMatcherMetadataLabelMatcherMetadataLabels.to_json())

# convert the object into a dict
endpoint_matcher_metadata_label_matcher_metadata_labels_dict = endpoint_matcher_metadata_label_matcher_metadata_labels_instance.to_dict()
# create an instance of EndpointMatcherMetadataLabelMatcherMetadataLabels from a dict
endpoint_matcher_metadata_label_matcher_metadata_labels_from_dict = EndpointMatcherMetadataLabelMatcherMetadataLabels.from_dict(endpoint_matcher_metadata_label_matcher_metadata_labels_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


