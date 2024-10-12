# ProcessResultObject

Stores the generic results of a process (check, scan, compare, verify, etc)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_date** | **datetime** | The date and time the item was checked to provide this result. | [optional] 
**check_id** | **str** | Unique identifier for every check/comparison/verification. Make sure you reference this ID whenever updating check details. This ID will also be used when pushing check results back to you. | [optional] 
**check_performed_by** | **str** | Service provider that performed the check. Basically the name of the connector, without the leading con_  | [optional] 
**check_source** | **str** | Code that can be used to determine the underlying nature or data source of the checks performed. This may or may not be known by the connector, or may be a provider specific type (e.g. type \&quot;O\&quot;)  Note, this will actually be normalised by the core service into a standfardised result so that we&#39;re not accidentally counting sources twice. Original source will then be copied into the KVPs  | [optional] 
**check_type** | **str** | Short indication of the type of check that was done.   When used as a summary, it will the the checkType that was requested  For granular results, it will be the individual check performed.  | [optional] 
**confidence_level** | **int** | Confidence in the result on a scale of 0 (no match) to 100 (strong/identical match). Whole integers only.  Negative values are used to indicate untrusted results.  | [optional] 
**provider_check_id** | **str** | The service provider will give us a receipt, transaction id, check number, or some such that gives us a unique id on their side that we can reconcile with  | [optional] 
**result_notes** | [**List[KeyValuePairObject]**](KeyValuePairObject.md) | Any additional notes that may relate to the state. These are returned as typed KVPs | [optional] 
**result_state** | [**EnumCheckResultState**](EnumCheckResultState.md) |  | [optional] 
**risk_level** | **int** | Only supplied in a summary result. Used to indicate the ovall risk score for the entity at this point in time, based on configurable rules.  Some examples might include:    * Current level of ID checks passed   * Device ID scores   * Current PEP/Sanctions/etc checks   * Jurisdictional risk based on addresses, documents and other KVPs   * Fraud check results    In this case a higher score is a bad thing. General rule of thumb:    * 0 - 30 &#x3D; Low Risk   * 31 - 50 &#x3D; Medium Risk   * 50 - 75 &#x3D; High Risk   * 75+ &#x3D; Unacceptable  | [optional] 

## Example

```python
from openapi_client.models.process_result_object import ProcessResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessResultObject from a JSON string
process_result_object_instance = ProcessResultObject.from_json(json)
# print the JSON string representation of the object
print(ProcessResultObject.to_json())

# convert the object into a dict
process_result_object_dict = process_result_object_instance.to_dict()
# create an instance of ProcessResultObject from a dict
process_result_object_from_dict = ProcessResultObject.from_dict(process_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


