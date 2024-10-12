# JsonChild


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[JsonChild]**](JsonChild.md) |  | [optional] 
**features** | [**List[JsonModelFeatureInformation]**](JsonModelFeatureInformation.md) |  | [optional] 
**instance_of** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.json_child import JsonChild

# TODO update the JSON string below
json = "{}"
# create an instance of JsonChild from a JSON string
json_child_instance = JsonChild.from_json(json)
# print the JSON string representation of the object
print(JsonChild.to_json())

# convert the object into a dict
json_child_dict = json_child_instance.to_dict()
# create an instance of JsonChild from a dict
json_child_from_dict = JsonChild.from_dict(json_child_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


