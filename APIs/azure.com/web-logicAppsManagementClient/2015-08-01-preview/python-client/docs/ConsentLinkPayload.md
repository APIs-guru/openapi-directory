# ConsentLinkPayload

Collection of consent links

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ConsentLink]**](ConsentLink.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.consent_link_payload import ConsentLinkPayload

# TODO update the JSON string below
json = "{}"
# create an instance of ConsentLinkPayload from a JSON string
consent_link_payload_instance = ConsentLinkPayload.from_json(json)
# print the JSON string representation of the object
print(ConsentLinkPayload.to_json())

# convert the object into a dict
consent_link_payload_dict = consent_link_payload_instance.to_dict()
# create an instance of ConsentLinkPayload from a dict
consent_link_payload_from_dict = ConsentLinkPayload.from_dict(consent_link_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


