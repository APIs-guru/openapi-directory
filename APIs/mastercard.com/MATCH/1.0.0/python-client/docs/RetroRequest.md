# RetroRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquirer_id** | **str** | The Acquirer Id for the retro summary to be fetched. | [optional] 

## Example

```python
from openapi_client.models.retro_request import RetroRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RetroRequest from a JSON string
retro_request_instance = RetroRequest.from_json(json)
# print the JSON string representation of the object
print(RetroRequest.to_json())

# convert the object into a dict
retro_request_dict = retro_request_instance.to_dict()
# create an instance of RetroRequest from a dict
retro_request_from_dict = RetroRequest.from_dict(retro_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


