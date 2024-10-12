# FailoverProperty

Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition_status** | **str** | Set the status the message must reach in the expiry_time before failing over. Options are delivered or read. | [optional] 
**expiry_time** | **int** | In seconds. Minimum value is 15 and maximum value is 86,400 seconds (1 day). | [optional] 

## Example

```python
from openapi_client.models.failover_property import FailoverProperty

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverProperty from a JSON string
failover_property_instance = FailoverProperty.from_json(json)
# print the JSON string representation of the object
print(FailoverProperty.to_json())

# convert the object into a dict
failover_property_dict = failover_property_instance.to_dict()
# create an instance of FailoverProperty from a dict
failover_property_from_dict = FailoverProperty.from_dict(failover_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


