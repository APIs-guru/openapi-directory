# CombinedAudience

Describes a combined audience resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**combined_audience_id** | **str** | Output only. The unique ID of the combined audience. Assigned by the system. | [optional] [readonly] 
**display_name** | **str** | Output only. The display name of the combined audience. . | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the combined audience. | [optional] [readonly] 

## Example

```python
from openapi_client.models.combined_audience import CombinedAudience

# TODO update the JSON string below
json = "{}"
# create an instance of CombinedAudience from a JSON string
combined_audience_instance = CombinedAudience.from_json(json)
# print the JSON string representation of the object
print(CombinedAudience.to_json())

# convert the object into a dict
combined_audience_dict = combined_audience_instance.to_dict()
# create an instance of CombinedAudience from a dict
combined_audience_from_dict = CombinedAudience.from_dict(combined_audience_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


