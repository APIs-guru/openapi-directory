# GoogleCloudApigeeV1ListRatePlansResponse

Response for ListRatePlans.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_start_key** | **str** | Value that can be sent as &#x60;startKey&#x60; to retrieve the next page of content. If this field is omitted, there are no subsequent pages. | [optional] 
**rate_plans** | [**List[GoogleCloudApigeeV1RatePlan]**](GoogleCloudApigeeV1RatePlan.md) | List of rate plans in an organization. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_rate_plans_response import GoogleCloudApigeeV1ListRatePlansResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListRatePlansResponse from a JSON string
google_cloud_apigee_v1_list_rate_plans_response_instance = GoogleCloudApigeeV1ListRatePlansResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListRatePlansResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_rate_plans_response_dict = google_cloud_apigee_v1_list_rate_plans_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListRatePlansResponse from a dict
google_cloud_apigee_v1_list_rate_plans_response_from_dict = GoogleCloudApigeeV1ListRatePlansResponse.from_dict(google_cloud_apigee_v1_list_rate_plans_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


