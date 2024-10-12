# GetOrganizationInsightApplications200ResponseInnerThresholds

Thresholds defined by a user or Meraki models for each application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by_network** | [**List[GetOrganizationInsightApplications200ResponseInnerThresholdsByNetworkInner]**](GetOrganizationInsightApplications200ResponseInnerThresholdsByNetworkInner.md) | Threshold for each network | [optional] 
**type** | **str** | Threshold type (static or smart) | [optional] 

## Example

```python
from openapi_client.models.get_organization_insight_applications200_response_inner_thresholds import GetOrganizationInsightApplications200ResponseInnerThresholds

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationInsightApplications200ResponseInnerThresholds from a JSON string
get_organization_insight_applications200_response_inner_thresholds_instance = GetOrganizationInsightApplications200ResponseInnerThresholds.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationInsightApplications200ResponseInnerThresholds.to_json())

# convert the object into a dict
get_organization_insight_applications200_response_inner_thresholds_dict = get_organization_insight_applications200_response_inner_thresholds_instance.to_dict()
# create an instance of GetOrganizationInsightApplications200ResponseInnerThresholds from a dict
get_organization_insight_applications200_response_inner_thresholds_from_dict = GetOrganizationInsightApplications200ResponseInnerThresholds.from_dict(get_organization_insight_applications200_response_inner_thresholds_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


