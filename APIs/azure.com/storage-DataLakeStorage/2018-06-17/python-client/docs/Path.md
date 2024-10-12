# Path


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_length** | **int** |  | [optional] 
**e_tag** | **str** |  | [optional] 
**group** | **str** |  | [optional] 
**is_directory** | **bool** |  | [optional] [default to False]
**last_modified** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 
**permissions** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.path import Path

# TODO update the JSON string below
json = "{}"
# create an instance of Path from a JSON string
path_instance = Path.from_json(json)
# print the JSON string representation of the object
print(Path.to_json())

# convert the object into a dict
path_dict = path_instance.to_dict()
# create an instance of Path from a dict
path_from_dict = Path.from_dict(path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


