# GoogleCloudApigeeV1Point

Point is a group of information collected by runtime plane at critical points of the message flow of the processed API request. This is a list of supported point IDs, categorized to three major buckets. For each category, debug points that we are currently supporting are listed below: - Flow status debug points: StateChange FlowInfo Condition Execution DebugMask Error - Flow control debug points: FlowCallout Paused Resumed FlowReturn BreakFlow Error - Runtime debug points: ScriptExecutor FlowCalloutStepDefinition CustomTarget StepDefinition Oauth2ServicePoint RaiseFault NodeJS The detail information of the given debug point is stored in a list of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Name of a step in the transaction. | [optional] 
**results** | [**List[GoogleCloudApigeeV1Result]**](GoogleCloudApigeeV1Result.md) | List of results extracted from a given debug point. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_point import GoogleCloudApigeeV1Point

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Point from a JSON string
google_cloud_apigee_v1_point_instance = GoogleCloudApigeeV1Point.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Point.to_json())

# convert the object into a dict
google_cloud_apigee_v1_point_dict = google_cloud_apigee_v1_point_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Point from a dict
google_cloud_apigee_v1_point_from_dict = GoogleCloudApigeeV1Point.from_dict(google_cloud_apigee_v1_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


