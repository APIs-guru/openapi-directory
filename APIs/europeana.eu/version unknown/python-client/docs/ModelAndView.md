# ModelAndView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**empty** | **bool** |  | [optional] 
**model** | **object** |  | [optional] 
**model_map** | **Dict[str, object]** |  | [optional] 
**reference** | **bool** |  | [optional] 
**status** | **str** |  | [optional] 
**view** | [**View**](View.md) |  | [optional] 
**view_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.model_and_view import ModelAndView

# TODO update the JSON string below
json = "{}"
# create an instance of ModelAndView from a JSON string
model_and_view_instance = ModelAndView.from_json(json)
# print the JSON string representation of the object
print(ModelAndView.to_json())

# convert the object into a dict
model_and_view_dict = model_and_view_instance.to_dict()
# create an instance of ModelAndView from a dict
model_and_view_from_dict = ModelAndView.from_dict(model_and_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


