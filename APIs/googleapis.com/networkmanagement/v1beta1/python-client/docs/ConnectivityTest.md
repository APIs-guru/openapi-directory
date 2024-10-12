# ConnectivityTest

A Connectivity Test for a network reachability analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the test was created. | [optional] [readonly] 
**description** | **str** | The user-supplied description of the Connectivity Test. Maximum of 512 characters. | [optional] 
**destination** | [**Endpoint**](Endpoint.md) |  | [optional] 
**display_name** | **str** | Output only. The display name of a Connectivity Test. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Resource labels to represent user-provided metadata. | [optional] 
**name** | **str** | Required. Unique name of the resource using the form: &#x60;projects/{project_id}/locations/global/connectivityTests/{test}&#x60; | [optional] 
**probing_details** | [**ProbingDetails**](ProbingDetails.md) |  | [optional] 
**protocol** | **str** | IP Protocol of the test. When not provided, \&quot;TCP\&quot; is assumed. | [optional] 
**reachability_details** | [**ReachabilityDetails**](ReachabilityDetails.md) |  | [optional] 
**related_projects** | **List[str]** | Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries. | [optional] 
**source** | [**Endpoint**](Endpoint.md) |  | [optional] 
**update_time** | **str** | Output only. The time the test&#39;s configuration was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connectivity_test import ConnectivityTest

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectivityTest from a JSON string
connectivity_test_instance = ConnectivityTest.from_json(json)
# print the JSON string representation of the object
print(ConnectivityTest.to_json())

# convert the object into a dict
connectivity_test_dict = connectivity_test_instance.to_dict()
# create an instance of ConnectivityTest from a dict
connectivity_test_from_dict = ConnectivityTest.from_dict(connectivity_test_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


