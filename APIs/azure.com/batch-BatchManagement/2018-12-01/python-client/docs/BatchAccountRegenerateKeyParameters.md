# BatchAccountRegenerateKeyParameters

Parameters supplied to the RegenerateKey operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_name** | **str** | The type of account key to regenerate. | 

## Example

```python
from openapi_client.models.batch_account_regenerate_key_parameters import BatchAccountRegenerateKeyParameters

# TODO update the JSON string below
json = "{}"
# create an instance of BatchAccountRegenerateKeyParameters from a JSON string
batch_account_regenerate_key_parameters_instance = BatchAccountRegenerateKeyParameters.from_json(json)
# print the JSON string representation of the object
print(BatchAccountRegenerateKeyParameters.to_json())

# convert the object into a dict
batch_account_regenerate_key_parameters_dict = batch_account_regenerate_key_parameters_instance.to_dict()
# create an instance of BatchAccountRegenerateKeyParameters from a dict
batch_account_regenerate_key_parameters_from_dict = BatchAccountRegenerateKeyParameters.from_dict(batch_account_regenerate_key_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


