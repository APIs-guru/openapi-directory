# ListFeedsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feeds** | [**List[Feed]**](Feed.md) | A list of feeds. | [optional] 

## Example

```python
from openapi_client.models.list_feeds_response import ListFeedsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFeedsResponse from a JSON string
list_feeds_response_instance = ListFeedsResponse.from_json(json)
# print the JSON string representation of the object
print(ListFeedsResponse.to_json())

# convert the object into a dict
list_feeds_response_dict = list_feeds_response_instance.to_dict()
# create an instance of ListFeedsResponse from a dict
list_feeds_response_from_dict = ListFeedsResponse.from_dict(list_feeds_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


