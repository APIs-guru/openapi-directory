# GeneralCheckResultObject

Contains the details of a check on a given data point

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_process_results** | [**ProcessResultObject**](ProcessResultObject.md) |  | [optional] 
**check_requested_by** | **str** | Who performed the check. If it was the calling customer, the value will be \&quot;You\&quot;. If it was another institution that has previously validated this data, then a generic description of their industry will be provided, such as \&quot;Bank\&quot;, \&quot;Insurance\&quot;, \&quot;Other FI\&quot;.  | [optional] 

## Example

```python
from openapi_client.models.general_check_result_object import GeneralCheckResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of GeneralCheckResultObject from a JSON string
general_check_result_object_instance = GeneralCheckResultObject.from_json(json)
# print the JSON string representation of the object
print(GeneralCheckResultObject.to_json())

# convert the object into a dict
general_check_result_object_dict = general_check_result_object_instance.to_dict()
# create an instance of GeneralCheckResultObject from a dict
general_check_result_object_from_dict = GeneralCheckResultObject.from_dict(general_check_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


