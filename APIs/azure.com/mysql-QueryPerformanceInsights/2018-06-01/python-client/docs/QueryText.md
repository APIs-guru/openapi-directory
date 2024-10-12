# QueryText

Represents a Query Text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**QueryTextProperties**](QueryTextProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.query_text import QueryText

# TODO update the JSON string below
json = "{}"
# create an instance of QueryText from a JSON string
query_text_instance = QueryText.from_json(json)
# print the JSON string representation of the object
print(QueryText.to_json())

# convert the object into a dict
query_text_dict = query_text_instance.to_dict()
# create an instance of QueryText from a dict
query_text_from_dict = QueryText.from_dict(query_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


