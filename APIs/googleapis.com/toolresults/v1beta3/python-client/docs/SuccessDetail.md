# SuccessDetail

Details for an outcome with a SUCCESS outcome summary. LINT.IfChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**other_native_crash** | **bool** | If a native process other than the app crashed. | [optional] 

## Example

```python
from openapi_client.models.success_detail import SuccessDetail

# TODO update the JSON string below
json = "{}"
# create an instance of SuccessDetail from a JSON string
success_detail_instance = SuccessDetail.from_json(json)
# print the JSON string representation of the object
print(SuccessDetail.to_json())

# convert the object into a dict
success_detail_dict = success_detail_instance.to_dict()
# create an instance of SuccessDetail from a dict
success_detail_from_dict = SuccessDetail.from_dict(success_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


