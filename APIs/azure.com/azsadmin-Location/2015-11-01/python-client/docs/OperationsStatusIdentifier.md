# OperationsStatusIdentifier

The admin offer identifier for the location wide SubscriptionsAdminResourceTypes.OperationsStatus resource type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the operations status. | [optional] 
**name** | **str** | The name of the operations status. | [optional] 
**subscription_id** | **str** | The subscription identifier.. | [optional] 

## Example

```python
from openapi_client.models.operations_status_identifier import OperationsStatusIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsStatusIdentifier from a JSON string
operations_status_identifier_instance = OperationsStatusIdentifier.from_json(json)
# print the JSON string representation of the object
print(OperationsStatusIdentifier.to_json())

# convert the object into a dict
operations_status_identifier_dict = operations_status_identifier_instance.to_dict()
# create an instance of OperationsStatusIdentifier from a dict
operations_status_identifier_from_dict = OperationsStatusIdentifier.from_dict(operations_status_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


