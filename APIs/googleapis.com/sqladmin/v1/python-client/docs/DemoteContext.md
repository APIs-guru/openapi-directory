# DemoteContext

This context is used to demote an existing standalone instance to be a Cloud SQL read replica for an external database server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | This is always &#x60;sql#demoteContext&#x60;. | [optional] 
**source_representative_instance_name** | **str** | Required. The name of the instance which acts as the on-premises primary instance in the replication setup. | [optional] 

## Example

```python
from openapi_client.models.demote_context import DemoteContext

# TODO update the JSON string below
json = "{}"
# create an instance of DemoteContext from a JSON string
demote_context_instance = DemoteContext.from_json(json)
# print the JSON string representation of the object
print(DemoteContext.to_json())

# convert the object into a dict
demote_context_dict = demote_context_instance.to_dict()
# create an instance of DemoteContext from a dict
demote_context_from_dict = DemoteContext.from_dict(demote_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


