# Parameters

Parameters of a query or report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**List[FilterPair]**](FilterPair.md) | Filters used to match traffic data in your report. | [optional] 
**group_bys** | **List[str]** | Data is grouped by the filters listed in this field. | [optional] 
**metrics** | **List[str]** | Metrics to include as columns in your report. | [optional] 
**options** | [**Options**](Options.md) |  | [optional] 
**type** | **str** | The type of the report. The type of the report will dictate what dimesions, filters, and metrics can be used. | [optional] 

## Example

```python
from openapi_client.models.parameters import Parameters

# TODO update the JSON string below
json = "{}"
# create an instance of Parameters from a JSON string
parameters_instance = Parameters.from_json(json)
# print the JSON string representation of the object
print(Parameters.to_json())

# convert the object into a dict
parameters_dict = parameters_instance.to_dict()
# create an instance of Parameters from a dict
parameters_from_dict = Parameters.from_dict(parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


