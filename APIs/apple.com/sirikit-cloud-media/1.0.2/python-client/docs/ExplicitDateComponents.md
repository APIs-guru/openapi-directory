# ExplicitDateComponents


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calendar_identifier** | **str** |  | [optional] 
**day** | **int** |  | [optional] 
**era** | **int** |  | [optional] 
**hour** | **int** |  | [optional] 
**minute** | **int** |  | [optional] 
**month** | **int** |  | [optional] 
**nanosecond** | **int** |  | [optional] 
**second** | **int** |  | [optional] 
**time_zone** | **str** |  | [optional] 
**year** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.explicit_date_components import ExplicitDateComponents

# TODO update the JSON string below
json = "{}"
# create an instance of ExplicitDateComponents from a JSON string
explicit_date_components_instance = ExplicitDateComponents.from_json(json)
# print the JSON string representation of the object
print(ExplicitDateComponents.to_json())

# convert the object into a dict
explicit_date_components_dict = explicit_date_components_instance.to_dict()
# create an instance of ExplicitDateComponents from a dict
explicit_date_components_from_dict = ExplicitDateComponents.from_dict(explicit_date_components_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


