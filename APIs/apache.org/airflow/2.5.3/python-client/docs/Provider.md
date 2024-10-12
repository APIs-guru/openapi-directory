# Provider

The provider  *New in version 2.1.0* 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the provider. | [optional] 
**package_name** | **str** | The package name of the provider. | [optional] 
**version** | **str** | The version of the provider. | [optional] 

## Example

```python
from openapi_client.models.provider import Provider

# TODO update the JSON string below
json = "{}"
# create an instance of Provider from a JSON string
provider_instance = Provider.from_json(json)
# print the JSON string representation of the object
print(Provider.to_json())

# convert the object into a dict
provider_dict = provider_instance.to_dict()
# create an instance of Provider from a dict
provider_from_dict = Provider.from_dict(provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


