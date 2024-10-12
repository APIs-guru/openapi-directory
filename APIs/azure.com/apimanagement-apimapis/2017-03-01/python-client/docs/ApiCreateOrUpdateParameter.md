# ApiCreateOrUpdateParameter

API Create or Update Parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiCreateOrUpdateProperties**](ApiCreateOrUpdateProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_create_or_update_parameter import ApiCreateOrUpdateParameter

# TODO update the JSON string below
json = "{}"
# create an instance of ApiCreateOrUpdateParameter from a JSON string
api_create_or_update_parameter_instance = ApiCreateOrUpdateParameter.from_json(json)
# print the JSON string representation of the object
print(ApiCreateOrUpdateParameter.to_json())

# convert the object into a dict
api_create_or_update_parameter_dict = api_create_or_update_parameter_instance.to_dict()
# create an instance of ApiCreateOrUpdateParameter from a dict
api_create_or_update_parameter_from_dict = ApiCreateOrUpdateParameter.from_dict(api_create_or_update_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


