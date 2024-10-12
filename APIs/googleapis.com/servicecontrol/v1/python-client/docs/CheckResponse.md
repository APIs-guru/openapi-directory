# CheckResponse

Response message for the Check method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_errors** | [**List[CheckError]**](CheckError.md) | Indicate the decision of the check. If no check errors are present, the service should process the operation. Otherwise the service should use the list of errors to determine the appropriate action. | [optional] 
**check_info** | [**CheckInfo**](CheckInfo.md) |  | [optional] 
**operation_id** | **str** | The same operation_id value used in the CheckRequest. Used for logging and diagnostics purposes. | [optional] 
**quota_info** | [**QuotaInfo**](QuotaInfo.md) |  | [optional] 
**service_config_id** | **str** | The actual config id used to process the request. | [optional] 
**service_rollout_id** | **str** | The current service rollout id used to process the request. | [optional] 

## Example

```python
from openapi_client.models.check_response import CheckResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckResponse from a JSON string
check_response_instance = CheckResponse.from_json(json)
# print the JSON string representation of the object
print(CheckResponse.to_json())

# convert the object into a dict
check_response_dict = check_response_instance.to_dict()
# create an instance of CheckResponse from a dict
check_response_from_dict = CheckResponse.from_dict(check_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


