# QueryResponse

Response message for TargetedQueriesService.Query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_headers** | [**List[ResultTableColumnHeader]**](ResultTableColumnHeader.md) | This value specifies information about the data returned in the &#x60;rows&#x60; fields. Each item in the &#x60;columnHeaders&#x60; list identifies a field returned in the &#x60;rows&#x60; value, which contains a list of comma-delimited data. The &#x60;columnHeaders&#x60; list will begin with the dimensions specified in the API request, which will be followed by the metrics specified in the API request. The order of both dimensions and metrics will match the ordering in the API request. For example, if the API request contains the parameters &#x60;dimensions&#x3D;ageGroup,gender&amp;metrics&#x3D;viewerPercentage&#x60;, the API response will return columns in this order: &#x60;ageGroup&#x60;, &#x60;gender&#x60;, &#x60;viewerPercentage&#x60;. | [optional] 
**errors** | [**Errors**](Errors.md) |  | [optional] 
**kind** | **str** | This value specifies the type of data included in the API response. For the query method, the kind property value will be &#x60;youtubeAnalytics#resultTable&#x60;. | [optional] 
**rows** | **List[List[object]]** | The list contains all rows of the result table. Each item in the list is an array that contains comma-delimited data corresponding to a single row of data. The order of the comma-delimited data fields will match the order of the columns listed in the &#x60;columnHeaders&#x60; field. If no data is available for the given query, the &#x60;rows&#x60; element will be omitted from the response. The response for a query with the &#x60;day&#x60; dimension will not contain rows for the most recent days. | [optional] 

## Example

```python
from openapi_client.models.query_response import QueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryResponse from a JSON string
query_response_instance = QueryResponse.from_json(json)
# print the JSON string representation of the object
print(QueryResponse.to_json())

# convert the object into a dict
query_response_dict = query_response_instance.to_dict()
# create an instance of QueryResponse from a dict
query_response_from_dict = QueryResponse.from_dict(query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


