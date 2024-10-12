# ImportProductSetsRequest

Request message for the `ImportProductSets` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_config** | [**ImportProductSetsInputConfig**](ImportProductSetsInputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_product_sets_request import ImportProductSetsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportProductSetsRequest from a JSON string
import_product_sets_request_instance = ImportProductSetsRequest.from_json(json)
# print the JSON string representation of the object
print(ImportProductSetsRequest.to_json())

# convert the object into a dict
import_product_sets_request_dict = import_product_sets_request_instance.to_dict()
# create an instance of ImportProductSetsRequest from a dict
import_product_sets_request_from_dict = ImportProductSetsRequest.from_dict(import_product_sets_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


