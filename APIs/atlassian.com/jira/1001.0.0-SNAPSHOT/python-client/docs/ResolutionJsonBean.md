# ResolutionJsonBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **bool** |  | [optional] 
**description** | **str** |  | [optional] 
**icon_url** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.resolution_json_bean import ResolutionJsonBean

# TODO update the JSON string below
json = "{}"
# create an instance of ResolutionJsonBean from a JSON string
resolution_json_bean_instance = ResolutionJsonBean.from_json(json)
# print the JSON string representation of the object
print(ResolutionJsonBean.to_json())

# convert the object into a dict
resolution_json_bean_dict = resolution_json_bean_instance.to_dict()
# create an instance of ResolutionJsonBean from a dict
resolution_json_bean_from_dict = ResolutionJsonBean.from_dict(resolution_json_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


