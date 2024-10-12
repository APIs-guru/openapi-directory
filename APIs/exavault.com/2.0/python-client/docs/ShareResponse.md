# ShareResponse

Response object for shares.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Share**](Share.md) |  | [optional] 
**included** | [**List[ShareCollectionResponseIncludedInner]**](ShareCollectionResponseIncludedInner.md) |  | [optional] 
**response_status** | **int** | Http status code of the response. | [optional] 

## Example

```python
from openapi_client.models.share_response import ShareResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ShareResponse from a JSON string
share_response_instance = ShareResponse.from_json(json)
# print the JSON string representation of the object
print(ShareResponse.to_json())

# convert the object into a dict
share_response_dict = share_response_instance.to_dict()
# create an instance of ShareResponse from a dict
share_response_from_dict = ShareResponse.from_dict(share_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


