# SubmitConfigSourceRequest

Request message for SubmitConfigSource method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_source** | [**ConfigSource**](ConfigSource.md) |  | [optional] 
**validate_only** | **bool** | Optional. If set, this will result in the generation of a &#x60;google.api.Service&#x60; configuration based on the &#x60;ConfigSource&#x60; provided, but the generated config and the sources will NOT be persisted. | [optional] 

## Example

```python
from openapi_client.models.submit_config_source_request import SubmitConfigSourceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitConfigSourceRequest from a JSON string
submit_config_source_request_instance = SubmitConfigSourceRequest.from_json(json)
# print the JSON string representation of the object
print(SubmitConfigSourceRequest.to_json())

# convert the object into a dict
submit_config_source_request_dict = submit_config_source_request_instance.to_dict()
# create an instance of SubmitConfigSourceRequest from a dict
submit_config_source_request_from_dict = SubmitConfigSourceRequest.from_dict(submit_config_source_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


