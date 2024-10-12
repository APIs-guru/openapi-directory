# Awards


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**nominee** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**winner** | **str** |  | [optional] 
**year** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.awards import Awards

# TODO update the JSON string below
json = "{}"
# create an instance of Awards from a JSON string
awards_instance = Awards.from_json(json)
# print the JSON string representation of the object
print(Awards.to_json())

# convert the object into a dict
awards_dict = awards_instance.to_dict()
# create an instance of Awards from a dict
awards_from_dict = Awards.from_dict(awards_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


