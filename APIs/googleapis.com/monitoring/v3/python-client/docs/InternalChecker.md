# InternalChecker

An internal checker allows Uptime checks to run on private/internal GCP resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The checker&#39;s human-readable name. The display name should be unique within a Cloud Monitoring Metrics Scope in order to make it easier to identify; however, uniqueness is not enforced. | [optional] 
**gcp_zone** | **str** | The GCP zone the Uptime check should egress from. Only respected for internal Uptime checks, where internal_network is specified. | [optional] 
**name** | **str** | A unique resource name for this InternalChecker. The format is: projects/[PROJECT_ID_OR_NUMBER]/internalCheckers/[INTERNAL_CHECKER_ID] [PROJECT_ID_OR_NUMBER] is the Cloud Monitoring Metrics Scope project for the Uptime check config associated with the internal checker. | [optional] 
**network** | **str** | The GCP VPC network (https://cloud.google.com/vpc/docs/vpc) where the internal resource lives (ex: \&quot;default\&quot;). | [optional] 
**peer_project_id** | **str** | The GCP project ID where the internal checker lives. Not necessary the same as the Metrics Scope project. | [optional] 
**state** | **str** | The current operational state of the internal checker. | [optional] 

## Example

```python
from openapi_client.models.internal_checker import InternalChecker

# TODO update the JSON string below
json = "{}"
# create an instance of InternalChecker from a JSON string
internal_checker_instance = InternalChecker.from_json(json)
# print the JSON string representation of the object
print(InternalChecker.to_json())

# convert the object into a dict
internal_checker_dict = internal_checker_instance.to_dict()
# create an instance of InternalChecker from a dict
internal_checker_from_dict = InternalChecker.from_dict(internal_checker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


