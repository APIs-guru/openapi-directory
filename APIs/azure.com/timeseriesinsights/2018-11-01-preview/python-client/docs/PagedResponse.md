# PagedResponse

Partial result that has continuation token to fetch the next partial result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | If returned, this means that current results represent a partial result. Continuation token allows to get the next page of results. To get the next page of query results, send the same request with continuation token parameter in \&quot;x-ms-continuation\&quot; HTTP header. | [optional] [readonly] 

## Example

```python
from openapi_client.models.paged_response import PagedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PagedResponse from a JSON string
paged_response_instance = PagedResponse.from_json(json)
# print the JSON string representation of the object
print(PagedResponse.to_json())

# convert the object into a dict
paged_response_dict = paged_response_instance.to_dict()
# create an instance of PagedResponse from a dict
paged_response_from_dict = PagedResponse.from_dict(paged_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


