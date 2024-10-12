# ListVolumeRestoresResponse

Response message for ListVolumeRestores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token which may be sent as page_token in a subsequent &#x60;ListVolumeRestores&#x60; call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. | [optional] 
**volume_restores** | [**List[VolumeRestore]**](VolumeRestore.md) | The list of VolumeRestores matching the given criteria. | [optional] 

## Example

```python
from openapi_client.models.list_volume_restores_response import ListVolumeRestoresResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListVolumeRestoresResponse from a JSON string
list_volume_restores_response_instance = ListVolumeRestoresResponse.from_json(json)
# print the JSON string representation of the object
print(ListVolumeRestoresResponse.to_json())

# convert the object into a dict
list_volume_restores_response_dict = list_volume_restores_response_instance.to_dict()
# create an instance of ListVolumeRestoresResponse from a dict
list_volume_restores_response_from_dict = ListVolumeRestoresResponse.from_dict(list_volume_restores_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


