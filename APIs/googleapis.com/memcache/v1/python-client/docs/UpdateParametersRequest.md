# UpdateParametersRequest

Request for UpdateParameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**MemcacheParameters**](MemcacheParameters.md) |  | [optional] 
**update_mask** | **str** | Required. Mask of fields to update. | [optional] 

## Example

```python
from openapi_client.models.update_parameters_request import UpdateParametersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateParametersRequest from a JSON string
update_parameters_request_instance = UpdateParametersRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateParametersRequest.to_json())

# convert the object into a dict
update_parameters_request_dict = update_parameters_request_instance.to_dict()
# create an instance of UpdateParametersRequest from a dict
update_parameters_request_from_dict = UpdateParametersRequest.from_dict(update_parameters_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


