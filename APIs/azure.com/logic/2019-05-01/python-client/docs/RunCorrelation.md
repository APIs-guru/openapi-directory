# RunCorrelation

The correlation properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_keywords** | **List[str]** | The client keywords. | [optional] 
**client_tracking_id** | **str** | The client tracking identifier. | [optional] 

## Example

```python
from openapi_client.models.run_correlation import RunCorrelation

# TODO update the JSON string below
json = "{}"
# create an instance of RunCorrelation from a JSON string
run_correlation_instance = RunCorrelation.from_json(json)
# print the JSON string representation of the object
print(RunCorrelation.to_json())

# convert the object into a dict
run_correlation_dict = run_correlation_instance.to_dict()
# create an instance of RunCorrelation from a dict
run_correlation_from_dict = RunCorrelation.from_dict(run_correlation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


