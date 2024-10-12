# ProviderOperation

Operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The operation description. | [optional] 
**display_name** | **str** | The operation display name. | [optional] 
**is_data_action** | **bool** | The dataAction flag to specify the operation type. | [optional] 
**name** | **str** | The operation name. | [optional] 
**origin** | **str** | The operation origin. | [optional] 
**properties** | **object** | The operation properties. | [optional] 

## Example

```python
from openapi_client.models.provider_operation import ProviderOperation

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderOperation from a JSON string
provider_operation_instance = ProviderOperation.from_json(json)
# print the JSON string representation of the object
print(ProviderOperation.to_json())

# convert the object into a dict
provider_operation_dict = provider_operation_instance.to_dict()
# create an instance of ProviderOperation from a dict
provider_operation_from_dict = ProviderOperation.from_dict(provider_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


