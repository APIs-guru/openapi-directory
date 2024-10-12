# SubmitConfigSourceResponse

Response message for SubmitConfigSource method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_config** | [**Service**](Service.md) |  | [optional] 

## Example

```python
from openapi_client.models.submit_config_source_response import SubmitConfigSourceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitConfigSourceResponse from a JSON string
submit_config_source_response_instance = SubmitConfigSourceResponse.from_json(json)
# print the JSON string representation of the object
print(SubmitConfigSourceResponse.to_json())

# convert the object into a dict
submit_config_source_response_dict = submit_config_source_response_instance.to_dict()
# create an instance of SubmitConfigSourceResponse from a dict
submit_config_source_response_from_dict = SubmitConfigSourceResponse.from_dict(submit_config_source_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


