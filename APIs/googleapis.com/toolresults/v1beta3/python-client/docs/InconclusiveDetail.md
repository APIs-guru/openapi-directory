# InconclusiveDetail

Details for an outcome with an INCONCLUSIVE outcome summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aborted_by_user** | **bool** | If the end user aborted the test execution before a pass or fail could be determined. For example, the user pressed ctrl-c which sent a kill signal to the test runner while the test was running. | [optional] 
**has_error_logs** | **bool** | If results are being provided to the user in certain cases of infrastructure failures | [optional] 
**infrastructure_failure** | **bool** | If the test runner could not determine success or failure because the test depends on a component other than the system under test which failed. For example, a mobile test requires provisioning a device where the test executes, and that provisioning can fail. | [optional] 

## Example

```python
from openapi_client.models.inconclusive_detail import InconclusiveDetail

# TODO update the JSON string below
json = "{}"
# create an instance of InconclusiveDetail from a JSON string
inconclusive_detail_instance = InconclusiveDetail.from_json(json)
# print the JSON string representation of the object
print(InconclusiveDetail.to_json())

# convert the object into a dict
inconclusive_detail_dict = inconclusive_detail_instance.to_dict()
# create an instance of InconclusiveDetail from a dict
inconclusive_detail_from_dict = InconclusiveDetail.from_dict(inconclusive_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


