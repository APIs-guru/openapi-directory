# RecordSet

Describes a DNS RecordSet (a set of DNS records with the same name and type).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets or sets the ETag of the RecordSet. | [optional] 
**properties** | [**RecordSetProperties**](RecordSetProperties.md) |  | [optional] 
**location** | **str** | The geo-location where the resource lives | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.record_set import RecordSet

# TODO update the JSON string below
json = "{}"
# create an instance of RecordSet from a JSON string
record_set_instance = RecordSet.from_json(json)
# print the JSON string representation of the object
print(RecordSet.to_json())

# convert the object into a dict
record_set_dict = record_set_instance.to_dict()
# create an instance of RecordSet from a dict
record_set_from_dict = RecordSet.from_dict(record_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


