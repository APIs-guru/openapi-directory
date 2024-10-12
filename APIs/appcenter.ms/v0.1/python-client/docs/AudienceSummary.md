# AudienceSummary

Audience definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definition** | **str** | Audience definition in OData format. | [optional] 
**description** | **str** | Audience description. | [optional] 
**estimated_count** | **int** | Estimated audience size. | [optional] 
**name** | **str** | Audience name. | [optional] 
**state** | **str** | Audience state. | [optional] 

## Example

```python
from openapi_client.models.audience_summary import AudienceSummary

# TODO update the JSON string below
json = "{}"
# create an instance of AudienceSummary from a JSON string
audience_summary_instance = AudienceSummary.from_json(json)
# print the JSON string representation of the object
print(AudienceSummary.to_json())

# convert the object into a dict
audience_summary_dict = audience_summary_instance.to_dict()
# create an instance of AudienceSummary from a dict
audience_summary_from_dict = AudienceSummary.from_dict(audience_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


