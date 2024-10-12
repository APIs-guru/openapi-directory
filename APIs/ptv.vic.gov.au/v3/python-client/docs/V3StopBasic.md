# V3StopBasic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stop_id** | **int** |  | [optional] 
**stop_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.v3_stop_basic import V3StopBasic

# TODO update the JSON string below
json = "{}"
# create an instance of V3StopBasic from a JSON string
v3_stop_basic_instance = V3StopBasic.from_json(json)
# print the JSON string representation of the object
print(V3StopBasic.to_json())

# convert the object into a dict
v3_stop_basic_dict = v3_stop_basic_instance.to_dict()
# create an instance of V3StopBasic from a dict
v3_stop_basic_from_dict = V3StopBasic.from_dict(v3_stop_basic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


