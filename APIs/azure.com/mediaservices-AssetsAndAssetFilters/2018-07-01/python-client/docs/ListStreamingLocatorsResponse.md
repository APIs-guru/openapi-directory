# ListStreamingLocatorsResponse

The Streaming Locators associated with this Asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**streaming_locators** | [**List[AssetStreamingLocator]**](AssetStreamingLocator.md) | The list of Streaming Locators. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_streaming_locators_response import ListStreamingLocatorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListStreamingLocatorsResponse from a JSON string
list_streaming_locators_response_instance = ListStreamingLocatorsResponse.from_json(json)
# print the JSON string representation of the object
print(ListStreamingLocatorsResponse.to_json())

# convert the object into a dict
list_streaming_locators_response_dict = list_streaming_locators_response_instance.to_dict()
# create an instance of ListStreamingLocatorsResponse from a dict
list_streaming_locators_response_from_dict = ListStreamingLocatorsResponse.from_dict(list_streaming_locators_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


