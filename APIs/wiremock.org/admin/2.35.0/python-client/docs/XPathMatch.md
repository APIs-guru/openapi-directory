# XPathMatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matches_xpath** | **str** |  | 
**namespaces** | **object** |  | [optional] 
**value_pattern** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.x_path_match import XPathMatch

# TODO update the JSON string below
json = "{}"
# create an instance of XPathMatch from a JSON string
x_path_match_instance = XPathMatch.from_json(json)
# print the JSON string representation of the object
print(XPathMatch.to_json())

# convert the object into a dict
x_path_match_dict = x_path_match_instance.to_dict()
# create an instance of XPathMatch from a dict
x_path_match_from_dict = XPathMatch.from_dict(x_path_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


