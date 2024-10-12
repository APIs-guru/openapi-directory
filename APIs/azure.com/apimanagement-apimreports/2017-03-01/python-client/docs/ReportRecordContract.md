# ReportRecordContract

Report data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_id** | **str** | API identifier path. /apis/{apiId} | [optional] 
**api_region** | **str** | API region identifier. | [optional] 
**api_time_avg** | **float** | Average time it took to process request. | [optional] 
**api_time_max** | **float** | Maximum time it took to process request. | [optional] 
**api_time_min** | **float** | Minimum time it took to process request. | [optional] 
**bandwidth** | **int** | Bandwidth consumed. | [optional] 
**cache_hit_count** | **int** | Number of times when content was served from cache policy. | [optional] 
**cache_miss_count** | **int** | Number of times content was fetched from backend. | [optional] 
**call_count_blocked** | **int** | Number of calls blocked due to invalid credentials. This includes calls returning HttpStatusCode.Unauthorized and HttpStatusCode.Forbidden and HttpStatusCode.TooManyRequests | [optional] 
**call_count_failed** | **int** | Number of calls failed due to proxy or backend errors. This includes calls returning HttpStatusCode.BadRequest(400) and any Code between HttpStatusCode.InternalServerError (500) and 600 | [optional] 
**call_count_other** | **int** | Number of other calls. | [optional] 
**call_count_success** | **int** | Number of successful calls. This includes calls returning HttpStatusCode &lt;&#x3D; 301 and HttpStatusCode.NotModified and HttpStatusCode.TemporaryRedirect | [optional] 
**call_count_total** | **int** | Total number of calls. | [optional] 
**country** | **str** | Country to which this record data is related. | [optional] 
**interval** | **str** | Length of aggregation period.  Interval must be multiple of 15 minutes and may not be zero. The value should be in ISO 8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations). | [optional] 
**name** | **str** | Name depending on report endpoint specifies product, API, operation or developer name. | [optional] 
**operation_id** | **str** | Operation identifier path. /apis/{apiId}/operations/{operationId} | [optional] 
**product_id** | **str** | Product identifier path. /products/{productId} | [optional] [readonly] 
**region** | **str** | Country region to which this record data is related. | [optional] 
**service_time_avg** | **float** | Average time it took to process request on backend. | [optional] 
**service_time_max** | **float** | Maximum time it took to process request on backend. | [optional] 
**service_time_min** | **float** | Minimum time it took to process request on backend. | [optional] 
**subscription_id** | **str** | Subscription identifier path. /subscriptions/{subscriptionId} | [optional] 
**timestamp** | **datetime** | Start of aggregation period. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | [optional] 
**user_id** | **str** | User identifier path. /users/{userId} | [optional] [readonly] 
**zip** | **str** | Zip code to which this record data is related. | [optional] 

## Example

```python
from openapi_client.models.report_record_contract import ReportRecordContract

# TODO update the JSON string below
json = "{}"
# create an instance of ReportRecordContract from a JSON string
report_record_contract_instance = ReportRecordContract.from_json(json)
# print the JSON string representation of the object
print(ReportRecordContract.to_json())

# convert the object into a dict
report_record_contract_dict = report_record_contract_instance.to_dict()
# create an instance of ReportRecordContract from a dict
report_record_contract_from_dict = ReportRecordContract.from_dict(report_record_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


