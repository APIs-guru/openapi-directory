# FailureDetail

Details for an outcome with a FAILURE outcome summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crashed** | **bool** | If the failure was severe because the system (app) under test crashed. | [optional] 
**device_out_of_memory** | **bool** | If the device ran out of memory during a test, causing the test to crash. | [optional] 
**failed_roboscript** | **bool** | If the Roboscript failed to complete successfully, e.g., because a Roboscript action or assertion failed or a Roboscript action could not be matched during the entire crawl. | [optional] 
**not_installed** | **bool** | If an app is not installed and thus no test can be run with the app. This might be caused by trying to run a test on an unsupported platform. | [optional] 
**other_native_crash** | **bool** | If a native process (including any other than the app) crashed. | [optional] 
**timed_out** | **bool** | If the test overran some time limit, and that is why it failed. | [optional] 
**unable_to_crawl** | **bool** | If the robo was unable to crawl the app; perhaps because the app did not start. | [optional] 

## Example

```python
from openapi_client.models.failure_detail import FailureDetail

# TODO update the JSON string below
json = "{}"
# create an instance of FailureDetail from a JSON string
failure_detail_instance = FailureDetail.from_json(json)
# print the JSON string representation of the object
print(FailureDetail.to_json())

# convert the object into a dict
failure_detail_dict = failure_detail_instance.to_dict()
# create an instance of FailureDetail from a dict
failure_detail_from_dict = FailureDetail.from_dict(failure_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


