# ApiV1ReportsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | ID of the account to report | 
**comment** | **str** | Reason for the report (default max 1000 characters) | [optional] 
**forward** | **bool** | If the account is remote, should the report be forwarded to the remote admin? | [optional] 
**status_ids** | **List[str]** | Array of Statuses to attach to the report, for context | [optional] 

## Example

```python
from openapi_client.models.api_v1_reports_post_request import ApiV1ReportsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1ReportsPostRequest from a JSON string
api_v1_reports_post_request_instance = ApiV1ReportsPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1ReportsPostRequest.to_json())

# convert the object into a dict
api_v1_reports_post_request_dict = api_v1_reports_post_request_instance.to_dict()
# create an instance of ApiV1ReportsPostRequest from a dict
api_v1_reports_post_request_from_dict = ApiV1ReportsPostRequest.from_dict(api_v1_reports_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


