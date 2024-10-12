# RefreshSummaryInput

Class representing the refresh summary input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**goal** | **str** | Gets or sets the goal for which summary needs to be refreshed. | [optional] 

## Example

```python
from openapi_client.models.refresh_summary_input import RefreshSummaryInput

# TODO update the JSON string below
json = "{}"
# create an instance of RefreshSummaryInput from a JSON string
refresh_summary_input_instance = RefreshSummaryInput.from_json(json)
# print the JSON string representation of the object
print(RefreshSummaryInput.to_json())

# convert the object into a dict
refresh_summary_input_dict = refresh_summary_input_instance.to_dict()
# create an instance of RefreshSummaryInput from a dict
refresh_summary_input_from_dict = RefreshSummaryInput.from_dict(refresh_summary_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


