# FetchMetaResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**req_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.fetch_meta_response import FetchMetaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchMetaResponse from a JSON string
fetch_meta_response_instance = FetchMetaResponse.from_json(json)
# print the JSON string representation of the object
print(FetchMetaResponse.to_json())

# convert the object into a dict
fetch_meta_response_dict = fetch_meta_response_instance.to_dict()
# create an instance of FetchMetaResponse from a dict
fetch_meta_response_from_dict = FetchMetaResponse.from_dict(fetch_meta_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


