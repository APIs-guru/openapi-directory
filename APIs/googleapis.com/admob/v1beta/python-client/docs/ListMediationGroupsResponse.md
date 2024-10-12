# ListMediationGroupsResponse

Response for the mediation groups list request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mediation_groups** | [**List[MediationGroup]**](MediationGroup.md) | The resulting mediation groups for the requested account. | [optional] 
**next_page_token** | **str** | If not empty, indicates that there may be more mediation groups for the request; this value should be passed in a new &#x60;ListMediationGroupsRequest&#x60;. | [optional] 

## Example

```python
from openapi_client.models.list_mediation_groups_response import ListMediationGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMediationGroupsResponse from a JSON string
list_mediation_groups_response_instance = ListMediationGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(ListMediationGroupsResponse.to_json())

# convert the object into a dict
list_mediation_groups_response_dict = list_mediation_groups_response_instance.to_dict()
# create an instance of ListMediationGroupsResponse from a dict
list_mediation_groups_response_from_dict = ListMediationGroupsResponse.from_dict(list_mediation_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


