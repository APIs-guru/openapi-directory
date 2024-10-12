# CoreSummary

The core summary of a search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_documents** | **int** | The number of documents of a core summary. | 
**status** | **str** | The status of a core summary. | [optional] 

## Example

```python
from openapi_client.models.core_summary import CoreSummary

# TODO update the JSON string below
json = "{}"
# create an instance of CoreSummary from a JSON string
core_summary_instance = CoreSummary.from_json(json)
# print the JSON string representation of the object
print(CoreSummary.to_json())

# convert the object into a dict
core_summary_dict = core_summary_instance.to_dict()
# create an instance of CoreSummary from a dict
core_summary_from_dict = CoreSummary.from_dict(core_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


