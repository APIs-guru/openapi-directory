# BounceSearchResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounces** | [**List[BounceInfoResponse]**](BounceInfoResponse.md) |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.bounce_search_response import BounceSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BounceSearchResponse from a JSON string
bounce_search_response_instance = BounceSearchResponse.from_json(json)
# print the JSON string representation of the object
print(BounceSearchResponse.to_json())

# convert the object into a dict
bounce_search_response_dict = bounce_search_response_instance.to_dict()
# create an instance of BounceSearchResponse from a dict
bounce_search_response_from_dict = BounceSearchResponse.from_dict(bounce_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


