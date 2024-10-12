# GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | [**List[GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInnerCountsInner]**](GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInnerCountsInner.md) | list of response codes and a count of how many requests had that code in the given time period | [optional] 
**end_ts** | **datetime** | The end time of the access period | [optional] 
**start_ts** | **datetime** | The start time of the access period | [optional] 

## Example

```python
from openapi_client.models.get_organization_api_requests_overview_response_codes_by_interval200_response_inner import GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner from a JSON string
get_organization_api_requests_overview_response_codes_by_interval200_response_inner_instance = GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner.to_json())

# convert the object into a dict
get_organization_api_requests_overview_response_codes_by_interval200_response_inner_dict = get_organization_api_requests_overview_response_codes_by_interval200_response_inner_instance.to_dict()
# create an instance of GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner from a dict
get_organization_api_requests_overview_response_codes_by_interval200_response_inner_from_dict = GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner.from_dict(get_organization_api_requests_overview_response_codes_by_interval200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


