# RunActionCorrelation

The workflow run action correlation properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_tracking_id** | **str** | The action tracking identifier. | [optional] 
**client_keywords** | **List[str]** | The client keywords. | [optional] 
**client_tracking_id** | **str** | The client tracking identifier. | [optional] 

## Example

```python
from openapi_client.models.run_action_correlation import RunActionCorrelation

# TODO update the JSON string below
json = "{}"
# create an instance of RunActionCorrelation from a JSON string
run_action_correlation_instance = RunActionCorrelation.from_json(json)
# print the JSON string representation of the object
print(RunActionCorrelation.to_json())

# convert the object into a dict
run_action_correlation_dict = run_action_correlation_instance.to_dict()
# create an instance of RunActionCorrelation from a dict
run_action_correlation_from_dict = RunActionCorrelation.from_dict(run_action_correlation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


