# QuotaError

Represents error information for QuotaOperation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**description** | **str** | Free-form text that provides details on the cause of the error. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**subject** | **str** | Subject to whom this error applies. See the specific enum for more details on this field. For example, \&quot;clientip:\&quot; or \&quot;project:\&quot;. | [optional] 

## Example

```python
from openapi_client.models.quota_error import QuotaError

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaError from a JSON string
quota_error_instance = QuotaError.from_json(json)
# print the JSON string representation of the object
print(QuotaError.to_json())

# convert the object into a dict
quota_error_dict = quota_error_instance.to_dict()
# create an instance of QuotaError from a dict
quota_error_from_dict = QuotaError.from_dict(quota_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


