# SourceCloneRequestBody

The values required to configure the source. The schema for this should have an id of the existing source along with the configuration you want to change in case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_clone_id** | **str** |  | 
**source_configuration** | [**SourceCloneConfiguration**](SourceCloneConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_clone_request_body import SourceCloneRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of SourceCloneRequestBody from a JSON string
source_clone_request_body_instance = SourceCloneRequestBody.from_json(json)
# print the JSON string representation of the object
print(SourceCloneRequestBody.to_json())

# convert the object into a dict
source_clone_request_body_dict = source_clone_request_body_instance.to_dict()
# create an instance of SourceCloneRequestBody from a dict
source_clone_request_body_from_dict = SourceCloneRequestBody.from_dict(source_clone_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


