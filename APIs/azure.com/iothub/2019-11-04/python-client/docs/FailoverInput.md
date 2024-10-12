# FailoverInput

Use to provide failover region when requesting manual Failover for a hub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover_region** | **str** | Region the hub will be failed over to | 

## Example

```python
from openapi_client.models.failover_input import FailoverInput

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverInput from a JSON string
failover_input_instance = FailoverInput.from_json(json)
# print the JSON string representation of the object
print(FailoverInput.to_json())

# convert the object into a dict
failover_input_dict = failover_input_instance.to_dict()
# create an instance of FailoverInput from a dict
failover_input_from_dict = FailoverInput.from_dict(failover_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


