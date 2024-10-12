# ListSkusResult

List of available SKUs for a new Kusto Cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[AzureSku]**](AzureSku.md) | The collection of available SKUs for new resources. | [optional] 

## Example

```python
from openapi_client.models.list_skus_result import ListSkusResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListSkusResult from a JSON string
list_skus_result_instance = ListSkusResult.from_json(json)
# print the JSON string representation of the object
print(ListSkusResult.to_json())

# convert the object into a dict
list_skus_result_dict = list_skus_result_instance.to_dict()
# create an instance of ListSkusResult from a dict
list_skus_result_from_dict = ListSkusResult.from_dict(list_skus_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


