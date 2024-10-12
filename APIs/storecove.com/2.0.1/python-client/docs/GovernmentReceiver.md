# GovernmentReceiver

The government receiver of the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**legal** | [**CountrySpecificationIdentifier**](CountrySpecificationIdentifier.md) |  | [optional] 
**routing** | [**CountrySpecificationIdentifier**](CountrySpecificationIdentifier.md) |  | [optional] 
**tax** | [**CountrySpecificationIdentifier**](CountrySpecificationIdentifier.md) |  | [optional] 

## Example

```python
from openapi_client.models.government_receiver import GovernmentReceiver

# TODO update the JSON string below
json = "{}"
# create an instance of GovernmentReceiver from a JSON string
government_receiver_instance = GovernmentReceiver.from_json(json)
# print the JSON string representation of the object
print(GovernmentReceiver.to_json())

# convert the object into a dict
government_receiver_dict = government_receiver_instance.to_dict()
# create an instance of GovernmentReceiver from a dict
government_receiver_from_dict = GovernmentReceiver.from_dict(government_receiver_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


