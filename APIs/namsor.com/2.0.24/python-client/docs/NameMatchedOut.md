# NameMatchedOut

Classified matched names

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**match_status** | **str** | The name matching status. | [optional] 
**score** | **float** |  | [optional] 
**script** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.name_matched_out import NameMatchedOut

# TODO update the JSON string below
json = "{}"
# create an instance of NameMatchedOut from a JSON string
name_matched_out_instance = NameMatchedOut.from_json(json)
# print the JSON string representation of the object
print(NameMatchedOut.to_json())

# convert the object into a dict
name_matched_out_dict = name_matched_out_instance.to_dict()
# create an instance of NameMatchedOut from a dict
name_matched_out_from_dict = NameMatchedOut.from_dict(name_matched_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


