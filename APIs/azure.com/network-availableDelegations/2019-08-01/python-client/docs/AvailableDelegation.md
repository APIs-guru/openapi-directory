# AvailableDelegation

The serviceName of an AvailableDelegation indicates a possible delegation for a subnet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | Describes the actions permitted to the service upon delegation. | [optional] 
**id** | **str** | A unique identifier of the AvailableDelegation resource. | [optional] 
**name** | **str** | The name of the AvailableDelegation resource. | [optional] 
**service_name** | **str** | The name of the service and resource. | [optional] 
**type** | **str** | Resource type. | [optional] 

## Example

```python
from openapi_client.models.available_delegation import AvailableDelegation

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableDelegation from a JSON string
available_delegation_instance = AvailableDelegation.from_json(json)
# print the JSON string representation of the object
print(AvailableDelegation.to_json())

# convert the object into a dict
available_delegation_dict = available_delegation_instance.to_dict()
# create an instance of AvailableDelegation from a dict
available_delegation_from_dict = AvailableDelegation.from_dict(available_delegation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


