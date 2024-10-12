# CreateRunResponse

Response body with a run identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**run_id** | **str** | Identifier of a run. | 

## Example

```python
from openapi_client.models.create_run_response import CreateRunResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRunResponse from a JSON string
create_run_response_instance = CreateRunResponse.from_json(json)
# print the JSON string representation of the object
print(CreateRunResponse.to_json())

# convert the object into a dict
create_run_response_dict = create_run_response_instance.to_dict()
# create an instance of CreateRunResponse from a dict
create_run_response_from_dict = CreateRunResponse.from_dict(create_run_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


