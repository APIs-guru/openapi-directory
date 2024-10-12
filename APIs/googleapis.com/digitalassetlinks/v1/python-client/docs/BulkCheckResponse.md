# BulkCheckResponse

Response for BulkCheck call. Results are sent in a list in the same order in which they were sent. Individual check errors are described in the appropriate check_results entry. If the entire call fails, the response will include a bulk_error_code field describing the error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bulk_error_code** | **str** | Error code for the entire request. Present only if the entire request failed. Individual check errors will not trigger the presence of this field. | [optional] 
**check_results** | [**List[CheckResponse]**](CheckResponse.md) | List of results for each check request. Results are returned in the same order in which they were sent in the request. | [optional] 

## Example

```python
from openapi_client.models.bulk_check_response import BulkCheckResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkCheckResponse from a JSON string
bulk_check_response_instance = BulkCheckResponse.from_json(json)
# print the JSON string representation of the object
print(BulkCheckResponse.to_json())

# convert the object into a dict
bulk_check_response_dict = bulk_check_response_instance.to_dict()
# create an instance of BulkCheckResponse from a dict
bulk_check_response_from_dict = BulkCheckResponse.from_dict(bulk_check_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


