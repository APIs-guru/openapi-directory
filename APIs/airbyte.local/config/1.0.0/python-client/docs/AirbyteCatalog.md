# AirbyteCatalog

describes the available schema (catalog).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**streams** | [**List[AirbyteStreamAndConfiguration]**](AirbyteStreamAndConfiguration.md) |  | 

## Example

```python
from openapi_client.models.airbyte_catalog import AirbyteCatalog

# TODO update the JSON string below
json = "{}"
# create an instance of AirbyteCatalog from a JSON string
airbyte_catalog_instance = AirbyteCatalog.from_json(json)
# print the JSON string representation of the object
print(AirbyteCatalog.to_json())

# convert the object into a dict
airbyte_catalog_dict = airbyte_catalog_instance.to_dict()
# create an instance of AirbyteCatalog from a dict
airbyte_catalog_from_dict = AirbyteCatalog.from_dict(airbyte_catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


