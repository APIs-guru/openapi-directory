# OBError1



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | [**ErrorCode**](ErrorCode.md) |  | 
**message** | **str** | A description of the error that occurred. e.g., &#39;A mandatory field isn&#39;t supplied&#39; or &#39;RequestedExecutionDateTime must be in future&#39;OBIE doesn&#39;t standardise this field | 
**path** | **str** | Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency | [optional] 

## Example

```python
from openapi_client.models.ob_error1 import OBError1

# TODO update the JSON string below
json = "{}"
# create an instance of OBError1 from a JSON string
ob_error1_instance = OBError1.from_json(json)
# print the JSON string representation of the object
print(OBError1.to_json())

# convert the object into a dict
ob_error1_dict = ob_error1_instance.to_dict()
# create an instance of OBError1 from a dict
ob_error1_from_dict = OBError1.from_dict(ob_error1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


