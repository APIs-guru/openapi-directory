# CCCDefinition

Open Banking Commercial Credit Card product data details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | [**List[BrandInner1]**](BrandInner1.md) | Brand registered by the banking group at https://register.fca.org.uk/ | 

## Example

```python
from openapi_client.models.ccc_definition import CCCDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of CCCDefinition from a JSON string
ccc_definition_instance = CCCDefinition.from_json(json)
# print the JSON string representation of the object
print(CCCDefinition.to_json())

# convert the object into a dict
ccc_definition_dict = ccc_definition_instance.to_dict()
# create an instance of CCCDefinition from a dict
ccc_definition_from_dict = CCCDefinition.from_dict(ccc_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


