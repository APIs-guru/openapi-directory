# GetOrganizationUplinksStatuses200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_reported_at** | **datetime** | Last reported time for the device | [optional] 
**model** | **str** | The uplink model | [optional] 
**network_id** | **str** | Network identifier | [optional] 
**serial** | **str** | The uplink serial | [optional] 
**uplinks** | [**List[GetOrganizationUplinksStatuses200ResponseInnerUplinksInner]**](GetOrganizationUplinksStatuses200ResponseInnerUplinksInner.md) | Uplinks | [optional] 

## Example

```python
from openapi_client.models.get_organization_uplinks_statuses200_response_inner import GetOrganizationUplinksStatuses200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationUplinksStatuses200ResponseInner from a JSON string
get_organization_uplinks_statuses200_response_inner_instance = GetOrganizationUplinksStatuses200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationUplinksStatuses200ResponseInner.to_json())

# convert the object into a dict
get_organization_uplinks_statuses200_response_inner_dict = get_organization_uplinks_statuses200_response_inner_instance.to_dict()
# create an instance of GetOrganizationUplinksStatuses200ResponseInner from a dict
get_organization_uplinks_statuses200_response_inner_from_dict = GetOrganizationUplinksStatuses200ResponseInner.from_dict(get_organization_uplinks_statuses200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


