# FailureDetail

Additional information about the reasons for the failure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description of the failure. | [optional] 

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


