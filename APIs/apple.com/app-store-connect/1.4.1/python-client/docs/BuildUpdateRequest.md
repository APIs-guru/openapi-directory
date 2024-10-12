# BuildUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BuildUpdateRequestData**](BuildUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.build_update_request import BuildUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BuildUpdateRequest from a JSON string
build_update_request_instance = BuildUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(BuildUpdateRequest.to_json())

# convert the object into a dict
build_update_request_dict = build_update_request_instance.to_dict()
# create an instance of BuildUpdateRequest from a dict
build_update_request_from_dict = BuildUpdateRequest.from_dict(build_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


