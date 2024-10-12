# CheckConsistencyResponse

Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consistent** | **bool** | True only if the token is consistent. A token is consistent if replication has caught up with the restrictions specified in the request. | [optional] 

## Example

```python
from openapi_client.models.check_consistency_response import CheckConsistencyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckConsistencyResponse from a JSON string
check_consistency_response_instance = CheckConsistencyResponse.from_json(json)
# print the JSON string representation of the object
print(CheckConsistencyResponse.to_json())

# convert the object into a dict
check_consistency_response_dict = check_consistency_response_instance.to_dict()
# create an instance of CheckConsistencyResponse from a dict
check_consistency_response_from_dict = CheckConsistencyResponse.from_dict(check_consistency_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


