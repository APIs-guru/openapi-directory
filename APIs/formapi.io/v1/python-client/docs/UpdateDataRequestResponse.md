# UpdateDataRequestResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_request** | [**SubmissionDataRequest**](SubmissionDataRequest.md) |  | 
**errors** | **List[str]** |  | [optional] 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.update_data_request_response import UpdateDataRequestResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDataRequestResponse from a JSON string
update_data_request_response_instance = UpdateDataRequestResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateDataRequestResponse.to_json())

# convert the object into a dict
update_data_request_response_dict = update_data_request_response_instance.to_dict()
# create an instance of UpdateDataRequestResponse from a dict
update_data_request_response_from_dict = UpdateDataRequestResponse.from_dict(update_data_request_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


