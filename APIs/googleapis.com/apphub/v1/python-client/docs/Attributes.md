# Attributes

Consumer provided attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_owners** | [**List[ContactInfo]**](ContactInfo.md) | Optional. Business team that ensures user needs are met and value is delivered | [optional] 
**criticality** | [**Criticality**](Criticality.md) |  | [optional] 
**developer_owners** | [**List[ContactInfo]**](ContactInfo.md) | Optional. Developer team that owns development and coding. | [optional] 
**environment** | [**Environment**](Environment.md) |  | [optional] 
**operator_owners** | [**List[ContactInfo]**](ContactInfo.md) | Optional. Operator team that ensures runtime and operations. | [optional] 

## Example

```python
from openapi_client.models.attributes import Attributes

# TODO update the JSON string below
json = "{}"
# create an instance of Attributes from a JSON string
attributes_instance = Attributes.from_json(json)
# print the JSON string representation of the object
print(Attributes.to_json())

# convert the object into a dict
attributes_dict = attributes_instance.to_dict()
# create an instance of Attributes from a dict
attributes_from_dict = Attributes.from_dict(attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


