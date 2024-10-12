# ResourceSkuResults

The API Management service SKUs operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The uri to fetch the next page of API Management service Skus. | [optional] 
**value** | [**List[ResourceSkuResult]**](ResourceSkuResult.md) | The list of skus available for the service. | 

## Example

```python
from openapi_client.models.resource_sku_results import ResourceSkuResults

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSkuResults from a JSON string
resource_sku_results_instance = ResourceSkuResults.from_json(json)
# print the JSON string representation of the object
print(ResourceSkuResults.to_json())

# convert the object into a dict
resource_sku_results_dict = resource_sku_results_instance.to_dict()
# create an instance of ResourceSkuResults from a dict
resource_sku_results_from_dict = ResourceSkuResults.from_dict(resource_sku_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


