# UnplannedFailoverInput

Input definition for planned failover.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UnplannedFailoverInputProperties**](UnplannedFailoverInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.unplanned_failover_input import UnplannedFailoverInput

# TODO update the JSON string below
json = "{}"
# create an instance of UnplannedFailoverInput from a JSON string
unplanned_failover_input_instance = UnplannedFailoverInput.from_json(json)
# print the JSON string representation of the object
print(UnplannedFailoverInput.to_json())

# convert the object into a dict
unplanned_failover_input_dict = unplanned_failover_input_instance.to_dict()
# create an instance of UnplannedFailoverInput from a dict
unplanned_failover_input_from_dict = UnplannedFailoverInput.from_dict(unplanned_failover_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


