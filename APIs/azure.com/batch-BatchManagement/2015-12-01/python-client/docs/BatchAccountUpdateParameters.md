# BatchAccountUpdateParameters

Parameters supplied to the Update operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BatchAccountBaseProperties**](BatchAccountBaseProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The user specified tags associated with the account. | [optional] 

## Example

```python
from openapi_client.models.batch_account_update_parameters import BatchAccountUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of BatchAccountUpdateParameters from a JSON string
batch_account_update_parameters_instance = BatchAccountUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(BatchAccountUpdateParameters.to_json())

# convert the object into a dict
batch_account_update_parameters_dict = batch_account_update_parameters_instance.to_dict()
# create an instance of BatchAccountUpdateParameters from a dict
batch_account_update_parameters_from_dict = BatchAccountUpdateParameters.from_dict(batch_account_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


