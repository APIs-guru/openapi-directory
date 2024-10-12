# ExtendedProducerResponsibilityPolicy

A type that defines the Extended Producer Responsibility policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_id** | **str** | The unique identifier for the category under which the policy applies. | [optional] 
**category_tree_id** | **str** | The unique identifier for the category tree under which the policy applies. | [optional] 
**supported_attributes** | [**List[ExtendedProducerResponsibility]**](ExtendedProducerResponsibility.md) | The details regarding the attributes included in the policy, such as their usage guidelines and whether they can be specified at the listing variation level. | [optional] 

## Example

```python
from openapi_client.models.extended_producer_responsibility_policy import ExtendedProducerResponsibilityPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedProducerResponsibilityPolicy from a JSON string
extended_producer_responsibility_policy_instance = ExtendedProducerResponsibilityPolicy.from_json(json)
# print the JSON string representation of the object
print(ExtendedProducerResponsibilityPolicy.to_json())

# convert the object into a dict
extended_producer_responsibility_policy_dict = extended_producer_responsibility_policy_instance.to_dict()
# create an instance of ExtendedProducerResponsibilityPolicy from a dict
extended_producer_responsibility_policy_from_dict = ExtendedProducerResponsibilityPolicy.from_dict(extended_producer_responsibility_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


