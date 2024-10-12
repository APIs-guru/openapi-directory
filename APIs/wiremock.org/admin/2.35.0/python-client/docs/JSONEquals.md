# JSONEquals


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**equal_to_json** | **str** |  | 

## Example

```python
from openapi_client.models.json_equals import JSONEquals

# TODO update the JSON string below
json = "{}"
# create an instance of JSONEquals from a JSON string
json_equals_instance = JSONEquals.from_json(json)
# print the JSON string representation of the object
print(JSONEquals.to_json())

# convert the object into a dict
json_equals_dict = json_equals_instance.to_dict()
# create an instance of JSONEquals from a dict
json_equals_from_dict = JSONEquals.from_dict(json_equals_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


