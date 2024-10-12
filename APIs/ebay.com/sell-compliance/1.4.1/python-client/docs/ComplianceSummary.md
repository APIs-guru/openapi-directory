# ComplianceSummary

This type is the base type for the getListingViolationsSummary response. The violationSummaries container contains an array of policy violation counts for each unique eBay marketplace and compliance type violation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**violation_summaries** | [**List[ComplianceSummaryInfo]**](ComplianceSummaryInfo.md) | This container is an array of one or more policy violation counts. A policy violation count is returned for each unique eBay marketplace and compliance type violation. As long as there is at least one non-compliant listing for the specified compliance type(s), this container will be returned. If no non-compliant listings are found for the specified compliance type(s), an HTTP status code of 204 No Content is returned, and there is no response body. | [optional] 

## Example

```python
from openapi_client.models.compliance_summary import ComplianceSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceSummary from a JSON string
compliance_summary_instance = ComplianceSummary.from_json(json)
# print the JSON string representation of the object
print(ComplianceSummary.to_json())

# convert the object into a dict
compliance_summary_dict = compliance_summary_instance.to_dict()
# create an instance of ComplianceSummary from a dict
compliance_summary_from_dict = ComplianceSummary.from_dict(compliance_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


