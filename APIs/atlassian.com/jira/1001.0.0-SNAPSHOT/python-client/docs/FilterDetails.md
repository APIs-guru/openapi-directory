# FilterDetails

Details of a filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the filter. | [optional] 
**edit_permissions** | [**List[SharePermission]**](SharePermission.md) | The groups and projects that can edit the filter. This can be specified when updating a filter, but not when creating a filter. | [optional] 
**expand** | **str** | Expand options that include additional filter details in the response. | [optional] [readonly] 
**favourite** | **bool** | Whether the filter is selected as a favorite by any users, not including the filter owner. | [optional] [readonly] 
**favourited_count** | **int** | The count of how many users have selected this filter as a favorite, including the filter owner. | [optional] [readonly] 
**id** | **str** | The unique identifier for the filter. | [optional] [readonly] 
**jql** | **str** | The JQL query for the filter. For example, *project &#x3D; SSP AND issuetype &#x3D; Bug*. | [optional] [readonly] 
**name** | **str** | The name of the filter. | 
**owner** | [**User**](User.md) | The user who owns the filter. Defaults to the creator of the filter, however, Jira administrators can change the owner of a shared filter in the admin settings. | [optional] [readonly] 
**search_url** | **str** | A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-3-filter-search-get) operation with the filter&#39;s JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/3/search?jql&#x3D;project+%3D+SSP+AND+issuetype+%3D+Bug*. | [optional] [readonly] 
**var_self** | **str** | The URL of the filter. | [optional] [readonly] 
**share_permissions** | [**List[SharePermission]**](SharePermission.md) | The groups and projects that the filter is shared with. This can be specified when updating a filter, but not when creating a filter. | [optional] 
**subscriptions** | [**List[FilterSubscription]**](FilterSubscription.md) | The users that are subscribed to the filter. | [optional] [readonly] 
**view_url** | **str** | A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter&#x3D;10100*. | [optional] [readonly] 

## Example

```python
from openapi_client.models.filter_details import FilterDetails

# TODO update the JSON string below
json = "{}"
# create an instance of FilterDetails from a JSON string
filter_details_instance = FilterDetails.from_json(json)
# print the JSON string representation of the object
print(FilterDetails.to_json())

# convert the object into a dict
filter_details_dict = filter_details_instance.to_dict()
# create an instance of FilterDetails from a dict
filter_details_from_dict = FilterDetails.from_dict(filter_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


