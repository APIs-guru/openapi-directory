# AnalysisEventMetadata

Metadata about an Analysis Event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delay** | **str** | The analysis delay. | [optional] 
**duration** | **str** | The duration of analysis. | [optional] 

## Example

```python
from openapi_client.models.analysis_event_metadata import AnalysisEventMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisEventMetadata from a JSON string
analysis_event_metadata_instance = AnalysisEventMetadata.from_json(json)
# print the JSON string representation of the object
print(AnalysisEventMetadata.to_json())

# convert the object into a dict
analysis_event_metadata_dict = analysis_event_metadata_instance.to_dict()
# create an instance of AnalysisEventMetadata from a dict
analysis_event_metadata_from_dict = AnalysisEventMetadata.from_dict(analysis_event_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


