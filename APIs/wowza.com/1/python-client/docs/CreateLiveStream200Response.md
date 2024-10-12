# CreateLiveStream200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**live_stream** | [**LiveStream**](LiveStream.md) |  | 

## Example

```python
from openapi_client.models.create_live_stream200_response import CreateLiveStream200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateLiveStream200Response from a JSON string
create_live_stream200_response_instance = CreateLiveStream200Response.from_json(json)
# print the JSON string representation of the object
print(CreateLiveStream200Response.to_json())

# convert the object into a dict
create_live_stream200_response_dict = create_live_stream200_response_instance.to_dict()
# create an instance of CreateLiveStream200Response from a dict
create_live_stream200_response_from_dict = CreateLiveStream200Response.from_dict(create_live_stream200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


