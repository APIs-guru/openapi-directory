# GetOrganizationInsightApplications200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | Application identifier | [optional] 
**name** | **str** | Application name | [optional] 
**thresholds** | [**GetOrganizationInsightApplications200ResponseInnerThresholds**](GetOrganizationInsightApplications200ResponseInnerThresholds.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_insight_applications200_response_inner import GetOrganizationInsightApplications200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationInsightApplications200ResponseInner from a JSON string
get_organization_insight_applications200_response_inner_instance = GetOrganizationInsightApplications200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationInsightApplications200ResponseInner.to_json())

# convert the object into a dict
get_organization_insight_applications200_response_inner_dict = get_organization_insight_applications200_response_inner_instance.to_dict()
# create an instance of GetOrganizationInsightApplications200ResponseInner from a dict
get_organization_insight_applications200_response_inner_from_dict = GetOrganizationInsightApplications200ResponseInner.from_dict(get_organization_insight_applications200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


