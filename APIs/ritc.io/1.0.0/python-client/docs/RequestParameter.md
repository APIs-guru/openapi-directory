# RequestParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**field_type** | **str** |  | [optional] 
**label** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**var_schema** | [**ModelSchema**](ModelSchema.md) |  | [optional] 

## Example

```python
from openapi_client.models.request_parameter import RequestParameter

# TODO update the JSON string below
json = "{}"
# create an instance of RequestParameter from a JSON string
request_parameter_instance = RequestParameter.from_json(json)
# print the JSON string representation of the object
print(RequestParameter.to_json())

# convert the object into a dict
request_parameter_dict = request_parameter_instance.to_dict()
# create an instance of RequestParameter from a dict
request_parameter_from_dict = RequestParameter.from_dict(request_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


