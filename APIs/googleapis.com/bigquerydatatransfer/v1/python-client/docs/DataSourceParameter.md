# DataSourceParameter

A parameter used to define custom fields in a data source definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_values** | **List[str]** | All possible values for the parameter. | [optional] 
**deprecated** | **bool** | If true, it should not be used in new transfers, and it should not be visible to users. | [optional] 
**description** | **str** | Parameter description. | [optional] 
**display_name** | **str** | Parameter display name in the user interface. | [optional] 
**fields** | [**List[DataSourceParameter]**](DataSourceParameter.md) | Deprecated. This field has no effect. | [optional] 
**immutable** | **bool** | Cannot be changed after initial creation. | [optional] 
**max_value** | **float** | For integer and double values specifies maximum allowed value. | [optional] 
**min_value** | **float** | For integer and double values specifies minimum allowed value. | [optional] 
**param_id** | **str** | Parameter identifier. | [optional] 
**recurse** | **bool** | Deprecated. This field has no effect. | [optional] 
**repeated** | **bool** | Deprecated. This field has no effect. | [optional] 
**required** | **bool** | Is parameter required. | [optional] 
**type** | **str** | Parameter type. | [optional] 
**validation_description** | **str** | Description of the requirements for this field, in case the user input does not fulfill the regex pattern or min/max values. | [optional] 
**validation_help_url** | **str** | URL to a help document to further explain the naming requirements. | [optional] 
**validation_regex** | **str** | Regular expression which can be used for parameter validation. | [optional] 

## Example

```python
from openapi_client.models.data_source_parameter import DataSourceParameter

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceParameter from a JSON string
data_source_parameter_instance = DataSourceParameter.from_json(json)
# print the JSON string representation of the object
print(DataSourceParameter.to_json())

# convert the object into a dict
data_source_parameter_dict = data_source_parameter_instance.to_dict()
# create an instance of DataSourceParameter from a dict
data_source_parameter_from_dict = DataSourceParameter.from_dict(data_source_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


