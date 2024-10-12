# ReportInteractionRequest

Request to report interactions on a recommendation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interaction_type** | **str** | Required. Type of the interaction that is reported, for example INTERACTION_CLICK. | [optional] 
**response_token** | **str** | Required. Token of the response when recommendation was returned. | [optional] 
**subtype** | **str** | Optional. Subtype of the recommendations this interaction happened on. This field must be set only to the value that is returned by {@link &#x60;RecommendationsService.GenerateRecommendations&#x60;} call. | [optional] 
**type** | **str** | Required. Type of the recommendations on which this interaction happened. This field must be set only to the value that is returned by {@link &#x60;GenerateRecommendationsResponse&#x60;} call. | [optional] 

## Example

```python
from openapi_client.models.report_interaction_request import ReportInteractionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReportInteractionRequest from a JSON string
report_interaction_request_instance = ReportInteractionRequest.from_json(json)
# print the JSON string representation of the object
print(ReportInteractionRequest.to_json())

# convert the object into a dict
report_interaction_request_dict = report_interaction_request_instance.to_dict()
# create an instance of ReportInteractionRequest from a dict
report_interaction_request_from_dict = ReportInteractionRequest.from_dict(report_interaction_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


