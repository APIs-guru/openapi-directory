# GetTestCountsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**GetTestCountsRequestFilters**](GetTestCountsRequestFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_test_counts_request import GetTestCountsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetTestCountsRequest from a JSON string
get_test_counts_request_instance = GetTestCountsRequest.from_json(json)
# print the JSON string representation of the object
print(GetTestCountsRequest.to_json())

# convert the object into a dict
get_test_counts_request_dict = get_test_counts_request_instance.to_dict()
# create an instance of GetTestCountsRequest from a dict
get_test_counts_request_from_dict = GetTestCountsRequest.from_dict(get_test_counts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


