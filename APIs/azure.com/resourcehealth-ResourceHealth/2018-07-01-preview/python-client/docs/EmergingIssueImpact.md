# EmergingIssueImpact

Object of the emerging issue impact on services and regions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The impacted service id. | [optional] 
**name** | **str** | The impacted service name. | [optional] 
**regions** | [**List[ImpactedRegion]**](ImpactedRegion.md) | The list of impacted regions for corresponding emerging issues. | [optional] 

## Example

```python
from openapi_client.models.emerging_issue_impact import EmergingIssueImpact

# TODO update the JSON string below
json = "{}"
# create an instance of EmergingIssueImpact from a JSON string
emerging_issue_impact_instance = EmergingIssueImpact.from_json(json)
# print the JSON string representation of the object
print(EmergingIssueImpact.to_json())

# convert the object into a dict
emerging_issue_impact_dict = emerging_issue_impact_instance.to_dict()
# create an instance of EmergingIssueImpact from a dict
emerging_issue_impact_from_dict = EmergingIssueImpact.from_dict(emerging_issue_impact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


