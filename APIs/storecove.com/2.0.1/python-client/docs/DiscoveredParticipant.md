# DiscoveredParticipant

A public identifier for this customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The response code. | [optional] 
**email** | **bool** | Whether or not an &#39;OK&#39; response means the document will be sent via Peppol, but delivered by email. This happens in the Belgian Hermes system where all identifiers have been registered, but if the receiver hasn&#39;t registered with a service provider, the Hermes system will send a PDF created from the electronic invoice and email that. The electronic document will itself not be emailed. Also see https://einvoice.belgium.be/en/article/send-structured-invoices-all-your-customers-hermes[Hermes^]. | [optional] 

## Example

```python
from openapi_client.models.discovered_participant import DiscoveredParticipant

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveredParticipant from a JSON string
discovered_participant_instance = DiscoveredParticipant.from_json(json)
# print the JSON string representation of the object
print(DiscoveredParticipant.to_json())

# convert the object into a dict
discovered_participant_dict = discovered_participant_instance.to_dict()
# create an instance of DiscoveredParticipant from a dict
discovered_participant_from_dict = DiscoveredParticipant.from_dict(discovered_participant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


