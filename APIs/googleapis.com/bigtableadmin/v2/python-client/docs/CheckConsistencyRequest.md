# CheckConsistencyRequest

Request message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consistency_token** | **str** | Required. The token created using GenerateConsistencyToken for the Table. | [optional] 

## Example

```python
from openapi_client.models.check_consistency_request import CheckConsistencyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CheckConsistencyRequest from a JSON string
check_consistency_request_instance = CheckConsistencyRequest.from_json(json)
# print the JSON string representation of the object
print(CheckConsistencyRequest.to_json())

# convert the object into a dict
check_consistency_request_dict = check_consistency_request_instance.to_dict()
# create an instance of CheckConsistencyRequest from a dict
check_consistency_request_from_dict = CheckConsistencyRequest.from_dict(check_consistency_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


