# RunManually


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduled_for** | **datetime** | Time used for run&#39;s \&quot;now\&quot; option, RFC3339.  Default is the server&#39;s now time. | [optional] 

## Example

```python
from openapi_client.models.run_manually import RunManually

# TODO update the JSON string below
json = "{}"
# create an instance of RunManually from a JSON string
run_manually_instance = RunManually.from_json(json)
# print the JSON string representation of the object
print(RunManually.to_json())

# convert the object into a dict
run_manually_dict = run_manually_instance.to_dict()
# create an instance of RunManually from a dict
run_manually_from_dict = RunManually.from_dict(run_manually_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


