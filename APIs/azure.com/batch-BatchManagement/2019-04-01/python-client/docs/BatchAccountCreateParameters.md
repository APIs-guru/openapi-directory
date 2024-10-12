# BatchAccountCreateParameters

Parameters supplied to the Create operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The region in which to create the account. | 
**properties** | [**BatchAccountCreateProperties**](BatchAccountCreateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The user-specified tags associated with the account. | [optional] 

## Example

```python
from openapi_client.models.batch_account_create_parameters import BatchAccountCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of BatchAccountCreateParameters from a JSON string
batch_account_create_parameters_instance = BatchAccountCreateParameters.from_json(json)
# print the JSON string representation of the object
print(BatchAccountCreateParameters.to_json())

# convert the object into a dict
batch_account_create_parameters_dict = batch_account_create_parameters_instance.to_dict()
# create an instance of BatchAccountCreateParameters from a dict
batch_account_create_parameters_from_dict = BatchAccountCreateParameters.from_dict(batch_account_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


