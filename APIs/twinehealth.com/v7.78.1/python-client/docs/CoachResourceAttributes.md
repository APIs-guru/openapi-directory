# CoachResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.coach_resource_attributes import CoachResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CoachResourceAttributes from a JSON string
coach_resource_attributes_instance = CoachResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(CoachResourceAttributes.to_json())

# convert the object into a dict
coach_resource_attributes_dict = coach_resource_attributes_instance.to_dict()
# create an instance of CoachResourceAttributes from a dict
coach_resource_attributes_from_dict = CoachResourceAttributes.from_dict(coach_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


