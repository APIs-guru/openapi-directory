# ListResourceSkusResult

List of available SKUs for an existing Kusto Cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[AzureResourceSku]**](AzureResourceSku.md) | The collection of available SKUs for an existing resource. | [optional] 

## Example

```python
from openapi_client.models.list_resource_skus_result import ListResourceSkusResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListResourceSkusResult from a JSON string
list_resource_skus_result_instance = ListResourceSkusResult.from_json(json)
# print the JSON string representation of the object
print(ListResourceSkusResult.to_json())

# convert the object into a dict
list_resource_skus_result_dict = list_resource_skus_result_instance.to_dict()
# create an instance of ListResourceSkusResult from a dict
list_resource_skus_result_from_dict = ListResourceSkusResult.from_dict(list_resource_skus_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


