# YarnApplication

A YARN application created by a job. Application information is a subset of org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto.Beta Feature: This report is available for testing purposes only. It may be changed before final release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The application name. | [optional] 
**progress** | **float** | Required. The numerical progress of the application, from 1 to 100. | [optional] 
**state** | **str** | Required. The application state. | [optional] 
**tracking_url** | **str** | Optional. The HTTP URL of the ApplicationMaster, HistoryServer, or TimelineServer that provides application-specific information. The URL uses the internal hostname, and requires a proxy server for resolution and, possibly, access. | [optional] 

## Example

```python
from openapi_client.models.yarn_application import YarnApplication

# TODO update the JSON string below
json = "{}"
# create an instance of YarnApplication from a JSON string
yarn_application_instance = YarnApplication.from_json(json)
# print the JSON string representation of the object
print(YarnApplication.to_json())

# convert the object into a dict
yarn_application_dict = yarn_application_instance.to_dict()
# create an instance of YarnApplication from a dict
yarn_application_from_dict = YarnApplication.from_dict(yarn_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


