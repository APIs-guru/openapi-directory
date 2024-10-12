# PagedResultsPublicContinuationToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_partition_key** | **str** |  | [optional] 
**next_row_key** | **str** |  | [optional] 
**next_table_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.paged_results_public_continuation_token import PagedResultsPublicContinuationToken

# TODO update the JSON string below
json = "{}"
# create an instance of PagedResultsPublicContinuationToken from a JSON string
paged_results_public_continuation_token_instance = PagedResultsPublicContinuationToken.from_json(json)
# print the JSON string representation of the object
print(PagedResultsPublicContinuationToken.to_json())

# convert the object into a dict
paged_results_public_continuation_token_dict = paged_results_public_continuation_token_instance.to_dict()
# create an instance of PagedResultsPublicContinuationToken from a dict
paged_results_public_continuation_token_from_dict = PagedResultsPublicContinuationToken.from_dict(paged_results_public_continuation_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


