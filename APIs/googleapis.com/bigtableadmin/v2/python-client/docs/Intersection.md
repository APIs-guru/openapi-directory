# Intersection

A GcRule which deletes cells matching all of the given rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[GcRule]**](GcRule.md) | Only delete cells which would be deleted by every element of &#x60;rules&#x60;. | [optional] 

## Example

```python
from openapi_client.models.intersection import Intersection

# TODO update the JSON string below
json = "{}"
# create an instance of Intersection from a JSON string
intersection_instance = Intersection.from_json(json)
# print the JSON string representation of the object
print(Intersection.to_json())

# convert the object into a dict
intersection_dict = intersection_instance.to_dict()
# create an instance of Intersection from a dict
intersection_from_dict = Intersection.from_dict(intersection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


