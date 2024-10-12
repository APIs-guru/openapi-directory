# DestinationNotWorkingEvidence

Evidence of the creative's destination URL not functioning properly or having been incorrectly set up.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_error** | **str** | DNS lookup errors. | [optional] 
**expanded_url** | **str** | The full non-working URL. | [optional] 
**http_error** | **int** | HTTP error code (for example, 404 or 5xx) | [optional] 
**invalid_page** | **str** | Page was crawled successfully, but was detected as either a page with no content or an error page. | [optional] 
**last_check_time** | **str** | Approximate time when the ad destination was last checked. | [optional] 
**platform** | **str** | Platform of the non-working URL. | [optional] 
**redirection_error** | **str** | HTTP redirect chain error. | [optional] 
**url_rejected** | **str** | Rejected because of malformed URLs or invalid requests. | [optional] 

## Example

```python
from openapi_client.models.destination_not_working_evidence import DestinationNotWorkingEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationNotWorkingEvidence from a JSON string
destination_not_working_evidence_instance = DestinationNotWorkingEvidence.from_json(json)
# print the JSON string representation of the object
print(DestinationNotWorkingEvidence.to_json())

# convert the object into a dict
destination_not_working_evidence_dict = destination_not_working_evidence_instance.to_dict()
# create an instance of DestinationNotWorkingEvidence from a dict
destination_not_working_evidence_from_dict = DestinationNotWorkingEvidence.from_dict(destination_not_working_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


