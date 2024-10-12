# SearchUserActivityRequest

The request to fetch User Report from Reporting API `userActivity:get` call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_types** | **List[str]** | Set of all activity types being requested. Only acvities matching these types will be returned in the response. If empty, all activies will be returned. | [optional] 
**date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**page_size** | **int** | Page size is for paging and specifies the maximum number of returned rows. Page size should be &gt; 0. If the value is 0 or if the field isn&#39;t specified, the request returns the default of 1000 rows per page. | [optional] 
**page_token** | **str** | A continuation token to get the next page of the results. Adding this to the request will return the rows after the pageToken. The pageToken should be the value returned in the nextPageToken parameter in the response to the [SearchUserActivityRequest](#SearchUserActivityRequest) request. | [optional] 
**user** | [**User**](User.md) |  | [optional] 
**view_id** | **str** | Required. The Analytics [view ID](https://support.google.com/analytics/answer/1009618) from which to retrieve data. Every [SearchUserActivityRequest](#SearchUserActivityRequest) must contain the &#x60;viewId&#x60;. | [optional] 

## Example

```python
from openapi_client.models.search_user_activity_request import SearchUserActivityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchUserActivityRequest from a JSON string
search_user_activity_request_instance = SearchUserActivityRequest.from_json(json)
# print the JSON string representation of the object
print(SearchUserActivityRequest.to_json())

# convert the object into a dict
search_user_activity_request_dict = search_user_activity_request_instance.to_dict()
# create an instance of SearchUserActivityRequest from a dict
search_user_activity_request_from_dict = SearchUserActivityRequest.from_dict(search_user_activity_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


