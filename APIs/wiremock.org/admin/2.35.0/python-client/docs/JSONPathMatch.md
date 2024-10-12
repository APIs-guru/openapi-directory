# JSONPathMatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_array_order** | **bool** |  | [optional] 
**ignore_extra_elements** | **bool** |  | [optional] 
**matches_json_path** | **str** |  | 

## Example

```python
from openapi_client.models.json_path_match import JSONPathMatch

# TODO update the JSON string below
json = "{}"
# create an instance of JSONPathMatch from a JSON string
json_path_match_instance = JSONPathMatch.from_json(json)
# print the JSON string representation of the object
print(JSONPathMatch.to_json())

# convert the object into a dict
json_path_match_dict = json_path_match_instance.to_dict()
# create an instance of JSONPathMatch from a dict
json_path_match_from_dict = JSONPathMatch.from_dict(json_path_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


