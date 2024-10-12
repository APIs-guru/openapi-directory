# PollingOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**diagnostics** | [**List[Diagnostic]**](Diagnostic.md) | An array of diagnostics to be collected by Deployment Manager, these diagnostics will be displayed to the user. | [optional] 
**fail_condition** | **str** | JsonPath expression that determines if the request failed. | [optional] 
**finish_condition** | **str** | JsonPath expression that determines if the request is completed. | [optional] 
**polling_link** | **str** | JsonPath expression that evaluates to string, it indicates where to poll. | [optional] 
**target_link** | **str** | JsonPath expression, after polling is completed, indicates where to fetch the resource. | [optional] 

## Example

```python
from openapi_client.models.polling_options import PollingOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PollingOptions from a JSON string
polling_options_instance = PollingOptions.from_json(json)
# print the JSON string representation of the object
print(PollingOptions.to_json())

# convert the object into a dict
polling_options_dict = polling_options_instance.to_dict()
# create an instance of PollingOptions from a dict
polling_options_from_dict = PollingOptions.from_dict(polling_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


