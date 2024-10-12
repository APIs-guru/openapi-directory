# DeadLetterDestination

Information about the dead letter destination for an event subscription. To configure a deadletter destination, do not directly instantiate an object of this class. Instead, instantiate an object of a derived class. Currently, StorageBlobDeadLetterDestination is the only class that derives from this class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_type** | **str** | Type of the endpoint for the dead letter destination | 

## Example

```python
from openapi_client.models.dead_letter_destination import DeadLetterDestination

# TODO update the JSON string below
json = "{}"
# create an instance of DeadLetterDestination from a JSON string
dead_letter_destination_instance = DeadLetterDestination.from_json(json)
# print the JSON string representation of the object
print(DeadLetterDestination.to_json())

# convert the object into a dict
dead_letter_destination_dict = dead_letter_destination_instance.to_dict()
# create an instance of DeadLetterDestination from a dict
dead_letter_destination_from_dict = DeadLetterDestination.from_dict(dead_letter_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


