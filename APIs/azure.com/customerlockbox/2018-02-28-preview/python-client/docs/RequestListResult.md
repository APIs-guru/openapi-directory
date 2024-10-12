# RequestListResult

Object containing a list of streaming jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of operation list results if there are any. | [optional] [readonly] 
**value** | [**List[LockboxRequestResponse]**](LockboxRequestResponse.md) | A list of Lockbox requests. Populated by a &#39;List&#39; operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.request_list_result import RequestListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RequestListResult from a JSON string
request_list_result_instance = RequestListResult.from_json(json)
# print the JSON string representation of the object
print(RequestListResult.to_json())

# convert the object into a dict
request_list_result_dict = request_list_result_instance.to_dict()
# create an instance of RequestListResult from a dict
request_list_result_from_dict = RequestListResult.from_dict(request_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


