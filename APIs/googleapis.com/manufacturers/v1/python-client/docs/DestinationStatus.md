# DestinationStatus

The destination status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | **str** | The name of the destination. | [optional] 
**status** | **str** | The status of the destination. | [optional] 

## Example

```python
from openapi_client.models.destination_status import DestinationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationStatus from a JSON string
destination_status_instance = DestinationStatus.from_json(json)
# print the JSON string representation of the object
print(DestinationStatus.to_json())

# convert the object into a dict
destination_status_dict = destination_status_instance.to_dict()
# create an instance of DestinationStatus from a dict
destination_status_from_dict = DestinationStatus.from_dict(destination_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


