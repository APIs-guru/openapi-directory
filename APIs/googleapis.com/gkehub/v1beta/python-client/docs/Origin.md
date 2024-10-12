# Origin

Origin defines where this MembershipFeatureSpec originated from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type specifies which type of origin is set. | [optional] 

## Example

```python
from openapi_client.models.origin import Origin

# TODO update the JSON string below
json = "{}"
# create an instance of Origin from a JSON string
origin_instance = Origin.from_json(json)
# print the JSON string representation of the object
print(Origin.to_json())

# convert the object into a dict
origin_dict = origin_instance.to_dict()
# create an instance of Origin from a dict
origin_from_dict = Origin.from_dict(origin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


