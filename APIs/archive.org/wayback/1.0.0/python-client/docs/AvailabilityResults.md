# AvailabilityResults


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[ArchivedResult]**](ArchivedResult.md) | A list of results | 

## Example

```python
from openapi_client.models.availability_results import AvailabilityResults

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilityResults from a JSON string
availability_results_instance = AvailabilityResults.from_json(json)
# print the JSON string representation of the object
print(AvailabilityResults.to_json())

# convert the object into a dict
availability_results_dict = availability_results_instance.to_dict()
# create an instance of AvailabilityResults from a dict
availability_results_from_dict = AvailabilityResults.from_dict(availability_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


