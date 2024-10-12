# ConsumerReceiver

The consumer receiver of the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**legal** | [**CountrySpecificationIdentifier**](CountrySpecificationIdentifier.md) |  | [optional] 
**routing** | [**CountrySpecificationIdentifier**](CountrySpecificationIdentifier.md) |  | [optional] 
**tax** | [**CountrySpecificationIdentifier**](CountrySpecificationIdentifier.md) |  | [optional] 

## Example

```python
from openapi_client.models.consumer_receiver import ConsumerReceiver

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerReceiver from a JSON string
consumer_receiver_instance = ConsumerReceiver.from_json(json)
# print the JSON string representation of the object
print(ConsumerReceiver.to_json())

# convert the object into a dict
consumer_receiver_dict = consumer_receiver_instance.to_dict()
# create an instance of ConsumerReceiver from a dict
consumer_receiver_from_dict = ConsumerReceiver.from_dict(consumer_receiver_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


