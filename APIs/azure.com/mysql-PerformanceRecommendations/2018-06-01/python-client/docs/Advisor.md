# Advisor

Represents a recommendation action advisor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | The properties of a recommendation action advisor. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.advisor import Advisor

# TODO update the JSON string below
json = "{}"
# create an instance of Advisor from a JSON string
advisor_instance = Advisor.from_json(json)
# print the JSON string representation of the object
print(Advisor.to_json())

# convert the object into a dict
advisor_dict = advisor_instance.to_dict()
# create an instance of Advisor from a dict
advisor_from_dict = Advisor.from_dict(advisor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


