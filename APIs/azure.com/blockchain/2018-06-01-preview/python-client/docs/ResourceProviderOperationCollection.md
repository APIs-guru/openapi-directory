# ResourceProviderOperationCollection

Collection of operation payload which is exposed in the response of the resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the URL, that the client should use to fetch the next page (per server side paging).  It&#39;s null for now, added for future use. | [optional] 
**value** | [**List[ResourceProviderOperation]**](ResourceProviderOperation.md) | Gets or sets the collection of operations. | [optional] 

## Example

```python
from openapi_client.models.resource_provider_operation_collection import ResourceProviderOperationCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceProviderOperationCollection from a JSON string
resource_provider_operation_collection_instance = ResourceProviderOperationCollection.from_json(json)
# print the JSON string representation of the object
print(ResourceProviderOperationCollection.to_json())

# convert the object into a dict
resource_provider_operation_collection_dict = resource_provider_operation_collection_instance.to_dict()
# create an instance of ResourceProviderOperationCollection from a dict
resource_provider_operation_collection_from_dict = ResourceProviderOperationCollection.from_dict(resource_provider_operation_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


