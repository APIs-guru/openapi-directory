# SpaceDetails

Details about the space including description and rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. A description of the space. For example, describe the space&#39;s discussion topic, functional purpose, or participants. Supports up to 150 characters. | [optional] 
**guidelines** | **str** | Optional. The space&#39;s rules, expectations, and etiquette. Supports up to 5,000 characters. | [optional] 

## Example

```python
from openapi_client.models.space_details import SpaceDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SpaceDetails from a JSON string
space_details_instance = SpaceDetails.from_json(json)
# print the JSON string representation of the object
print(SpaceDetails.to_json())

# convert the object into a dict
space_details_dict = space_details_instance.to_dict()
# create an instance of SpaceDetails from a dict
space_details_from_dict = SpaceDetails.from_dict(space_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


