# VerifyResult

Result of the verify operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | A number ranging from 0 to 1 indicating a level of confidence associated with a property. | 
**is_identical** | **bool** | True if the two faces belong to the same person or the face belongs to the person, otherwise false. | 

## Example

```python
from openapi_client.models.verify_result import VerifyResult

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyResult from a JSON string
verify_result_instance = VerifyResult.from_json(json)
# print the JSON string representation of the object
print(VerifyResult.to_json())

# convert the object into a dict
verify_result_dict = verify_result_instance.to_dict()
# create an instance of VerifyResult from a dict
verify_result_from_dict = VerifyResult.from_dict(verify_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


