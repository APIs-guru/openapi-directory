# SigningConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_store_file** | **bool** | Indicates if storeFile is specified in the signing configuration | [optional] 

## Example

```python
from openapi_client.models.signing_config import SigningConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SigningConfig from a JSON string
signing_config_instance = SigningConfig.from_json(json)
# print the JSON string representation of the object
print(SigningConfig.to_json())

# convert the object into a dict
signing_config_dict = signing_config_instance.to_dict()
# create an instance of SigningConfig from a dict
signing_config_from_dict = SigningConfig.from_dict(signing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


