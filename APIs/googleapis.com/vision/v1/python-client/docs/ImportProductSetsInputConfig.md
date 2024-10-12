# ImportProductSetsInputConfig

The input content for the `ImportProductSets` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**ImportProductSetsGcsSource**](ImportProductSetsGcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_product_sets_input_config import ImportProductSetsInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ImportProductSetsInputConfig from a JSON string
import_product_sets_input_config_instance = ImportProductSetsInputConfig.from_json(json)
# print the JSON string representation of the object
print(ImportProductSetsInputConfig.to_json())

# convert the object into a dict
import_product_sets_input_config_dict = import_product_sets_input_config_instance.to_dict()
# create an instance of ImportProductSetsInputConfig from a dict
import_product_sets_input_config_from_dict = ImportProductSetsInputConfig.from_dict(import_product_sets_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


