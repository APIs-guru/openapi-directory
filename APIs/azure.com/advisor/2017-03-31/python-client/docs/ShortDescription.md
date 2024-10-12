# ShortDescription

A summary of the recommendation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**problem** | **str** | The issue or opportunity identified by the recommendation. | [optional] 
**solution** | **str** | The remediation action suggested by the recommendation. | [optional] 

## Example

```python
from openapi_client.models.short_description import ShortDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ShortDescription from a JSON string
short_description_instance = ShortDescription.from_json(json)
# print the JSON string representation of the object
print(ShortDescription.to_json())

# convert the object into a dict
short_description_dict = short_description_instance.to_dict()
# create an instance of ShortDescription from a dict
short_description_from_dict = ShortDescription.from_dict(short_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


