# GetOrganizationInsightApplications200ResponseInnerThresholdsByNetworkInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**goodput** | **int** | Number of useful information bits delivered over a network per unit of time | [optional] 
**network_id** | **str** | Network identifier | [optional] 
**response_duration** | **int** | Duration of the response, in milliseconds | [optional] 

## Example

```python
from openapi_client.models.get_organization_insight_applications200_response_inner_thresholds_by_network_inner import GetOrganizationInsightApplications200ResponseInnerThresholdsByNetworkInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationInsightApplications200ResponseInnerThresholdsByNetworkInner from a JSON string
get_organization_insight_applications200_response_inner_thresholds_by_network_inner_instance = GetOrganizationInsightApplications200ResponseInnerThresholdsByNetworkInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationInsightApplications200ResponseInnerThresholdsByNetworkInner.to_json())

# convert the object into a dict
get_organization_insight_applications200_response_inner_thresholds_by_network_inner_dict = get_organization_insight_applications200_response_inner_thresholds_by_network_inner_instance.to_dict()
# create an instance of GetOrganizationInsightApplications200ResponseInnerThresholdsByNetworkInner from a dict
get_organization_insight_applications200_response_inner_thresholds_by_network_inner_from_dict = GetOrganizationInsightApplications200ResponseInnerThresholdsByNetworkInner.from_dict(get_organization_insight_applications200_response_inner_thresholds_by_network_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


