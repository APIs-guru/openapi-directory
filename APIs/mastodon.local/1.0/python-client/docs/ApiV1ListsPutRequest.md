# ApiV1ListsPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replies_policy** | **str** | Enumerable oneOf followed list none. Defaults to list. | [optional] [default to 'list']
**title** | **str** | The title of the list to be created. | [optional] 

## Example

```python
from openapi_client.models.api_v1_lists_put_request import ApiV1ListsPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1ListsPutRequest from a JSON string
api_v1_lists_put_request_instance = ApiV1ListsPutRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1ListsPutRequest.to_json())

# convert the object into a dict
api_v1_lists_put_request_dict = api_v1_lists_put_request_instance.to_dict()
# create an instance of ApiV1ListsPutRequest from a dict
api_v1_lists_put_request_from_dict = ApiV1ListsPutRequest.from_dict(api_v1_lists_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


