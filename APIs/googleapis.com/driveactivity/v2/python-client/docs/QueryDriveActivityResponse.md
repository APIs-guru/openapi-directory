# QueryDriveActivityResponse

Response message for querying Drive activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activities** | [**List[DriveActivity]**](DriveActivity.md) | List of activity requested. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.query_drive_activity_response import QueryDriveActivityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryDriveActivityResponse from a JSON string
query_drive_activity_response_instance = QueryDriveActivityResponse.from_json(json)
# print the JSON string representation of the object
print(QueryDriveActivityResponse.to_json())

# convert the object into a dict
query_drive_activity_response_dict = query_drive_activity_response_instance.to_dict()
# create an instance of QueryDriveActivityResponse from a dict
query_drive_activity_response_from_dict = QueryDriveActivityResponse.from_dict(query_drive_activity_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


