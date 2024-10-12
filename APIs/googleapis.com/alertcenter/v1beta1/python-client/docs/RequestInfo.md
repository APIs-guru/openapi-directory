# RequestInfo

Requests for one application that needs default SQL setup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_developer_email** | **List[str]** | List of app developers who triggered notifications for above application. | [optional] 
**app_key** | **str** | Required. The application that requires the SQL setup. | [optional] 
**number_of_requests** | **str** | Required. Number of requests sent for this application to set up default SQL instance. | [optional] 

## Example

```python
from openapi_client.models.request_info import RequestInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RequestInfo from a JSON string
request_info_instance = RequestInfo.from_json(json)
# print the JSON string representation of the object
print(RequestInfo.to_json())

# convert the object into a dict
request_info_dict = request_info_instance.to_dict()
# create an instance of RequestInfo from a dict
request_info_from_dict = RequestInfo.from_dict(request_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


