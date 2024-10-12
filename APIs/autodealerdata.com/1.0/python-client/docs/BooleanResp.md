# BooleanResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_name** | **str** |  | [optional] 
**cache_time_limit** | **int** |  | [optional] [default to 600]
**condition** | **str** |  | [optional] 
**data** | **bool** |  | 
**model_name** | **str** |  | [optional] 
**msg** | **str** |  | [optional] 
**region_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.boolean_resp import BooleanResp

# TODO update the JSON string below
json = "{}"
# create an instance of BooleanResp from a JSON string
boolean_resp_instance = BooleanResp.from_json(json)
# print the JSON string representation of the object
print(BooleanResp.to_json())

# convert the object into a dict
boolean_resp_dict = boolean_resp_instance.to_dict()
# create an instance of BooleanResp from a dict
boolean_resp_from_dict = BooleanResp.from_dict(boolean_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


