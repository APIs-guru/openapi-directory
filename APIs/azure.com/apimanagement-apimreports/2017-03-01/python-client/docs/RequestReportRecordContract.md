# RequestReportRecordContract

Request Report data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_id** | **str** | API identifier path. /apis/{apiId} | [optional] 
**api_region** | **str** | Azure region where the gateway that processed this request is located. | [optional] 
**api_time** | **float** | The total time it took to process this request. | [optional] 
**backend_response_code** | **str** | The HTTP status code received by the gateway as a result of forwarding this request to the backend. | [optional] 
**cache** | **str** | Specifies if response cache was involved in generating the response. If the value is none, the cache was not used. If the value is hit, cached response was returned. If the value is miss, the cache was used but lookup resulted in a miss and request was fulfilled by the backend. | [optional] 
**ip_address** | **str** | The client IP address associated with this request. | [optional] 
**method** | **str** | The HTTP method associated with this request.. | [optional] 
**operation_id** | **str** | Operation identifier path. /apis/{apiId}/operations/{operationId} | [optional] 
**product_id** | **str** | Product identifier path. /products/{productId} | [optional] [readonly] 
**request_id** | **str** | Request Identifier. | [optional] 
**request_size** | **int** | The size of this request.. | [optional] 
**response_code** | **int** | The HTTP status code returned by the gateway. | [optional] 
**response_size** | **int** | The size of the response returned by the gateway. | [optional] 
**service_time** | **float** | he time it took to forward this request to the backend and get the response back. | [optional] 
**subscription_id** | **str** | Subscription identifier path. /subscriptions/{subscriptionId} | [optional] 
**timestamp** | **datetime** | The date and time when this request was received by the gateway in ISO 8601 format. | [optional] 
**url** | **str** | The full URL associated with this request. | [optional] 
**user_id** | **str** | User identifier path. /users/{userId} | [optional] [readonly] 

## Example

```python
from openapi_client.models.request_report_record_contract import RequestReportRecordContract

# TODO update the JSON string below
json = "{}"
# create an instance of RequestReportRecordContract from a JSON string
request_report_record_contract_instance = RequestReportRecordContract.from_json(json)
# print the JSON string representation of the object
print(RequestReportRecordContract.to_json())

# convert the object into a dict
request_report_record_contract_dict = request_report_record_contract_instance.to_dict()
# create an instance of RequestReportRecordContract from a dict
request_report_record_contract_from_dict = RequestReportRecordContract.from_dict(request_report_record_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


