# ListDashboardsResponse

The ListDashboards request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dashboards** | [**List[Dashboard]**](Dashboard.md) | The list of requested dashboards. | [optional] 
**next_page_token** | **str** | If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. | [optional] 

## Example

```python
from openapi_client.models.list_dashboards_response import ListDashboardsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDashboardsResponse from a JSON string
list_dashboards_response_instance = ListDashboardsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDashboardsResponse.to_json())

# convert the object into a dict
list_dashboards_response_dict = list_dashboards_response_instance.to_dict()
# create an instance of ListDashboardsResponse from a dict
list_dashboards_response_from_dict = ListDashboardsResponse.from_dict(list_dashboards_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


