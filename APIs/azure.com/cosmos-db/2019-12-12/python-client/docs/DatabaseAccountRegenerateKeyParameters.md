# DatabaseAccountRegenerateKeyParameters

Parameters to regenerate the keys within the database account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_kind** | **str** | The access key to regenerate. | 

## Example

```python
from openapi_client.models.database_account_regenerate_key_parameters import DatabaseAccountRegenerateKeyParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseAccountRegenerateKeyParameters from a JSON string
database_account_regenerate_key_parameters_instance = DatabaseAccountRegenerateKeyParameters.from_json(json)
# print the JSON string representation of the object
print(DatabaseAccountRegenerateKeyParameters.to_json())

# convert the object into a dict
database_account_regenerate_key_parameters_dict = database_account_regenerate_key_parameters_instance.to_dict()
# create an instance of DatabaseAccountRegenerateKeyParameters from a dict
database_account_regenerate_key_parameters_from_dict = DatabaseAccountRegenerateKeyParameters.from_dict(database_account_regenerate_key_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


