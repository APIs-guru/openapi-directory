# ReportRequest

Request message for the Report method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operations** | [**List[AttributeContext]**](AttributeContext.md) | Describes the list of operations to be reported. Each operation is represented as an AttributeContext, and contains all attributes around an API access. | [optional] 
**service_config_id** | **str** | Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to &#39;latest&#39; to specify using the latest configuration. | [optional] 

## Example

```python
from openapi_client.models.report_request import ReportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReportRequest from a JSON string
report_request_instance = ReportRequest.from_json(json)
# print the JSON string representation of the object
print(ReportRequest.to_json())

# convert the object into a dict
report_request_dict = report_request_instance.to_dict()
# create an instance of ReportRequest from a dict
report_request_from_dict = ReportRequest.from_dict(report_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


