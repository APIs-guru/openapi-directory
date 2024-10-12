# Attributes

The object attributes managed by the KeyVault service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **int** | Creation time in seconds since 1970-01-01T00:00:00Z. | [optional] [readonly] 
**enabled** | **bool** | Determines whether the object is enabled. | [optional] 
**exp** | **int** | Expiry date in seconds since 1970-01-01T00:00:00Z. | [optional] 
**nbf** | **int** | Not before date in seconds since 1970-01-01T00:00:00Z. | [optional] 
**updated** | **int** | Last updated time in seconds since 1970-01-01T00:00:00Z. | [optional] [readonly] 

## Example

```python
from openapi_client.models.attributes import Attributes

# TODO update the JSON string below
json = "{}"
# create an instance of Attributes from a JSON string
attributes_instance = Attributes.from_json(json)
# print the JSON string representation of the object
print(Attributes.to_json())

# convert the object into a dict
attributes_dict = attributes_instance.to_dict()
# create an instance of Attributes from a dict
attributes_from_dict = Attributes.from_dict(attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


