# ResourceSkusResult

The response from the List Cache SKUs operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The uri to fetch the next page of cache Skus. | [optional] 
**value** | [**List[ResourceSku]**](ResourceSku.md) | The list of skus available for the subscription. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_skus_result import ResourceSkusResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSkusResult from a JSON string
resource_skus_result_instance = ResourceSkusResult.from_json(json)
# print the JSON string representation of the object
print(ResourceSkusResult.to_json())

# convert the object into a dict
resource_skus_result_dict = resource_skus_result_instance.to_dict()
# create an instance of ResourceSkusResult from a dict
resource_skus_result_from_dict = ResourceSkusResult.from_dict(resource_skus_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


