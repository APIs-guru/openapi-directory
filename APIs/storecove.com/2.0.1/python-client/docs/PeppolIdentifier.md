# PeppolIdentifier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**corppass** | [**CorpPass**](CorpPass.md) |  | [optional] 
**identifier** | **str** | The identifier. | [optional] 
**scheme** | **str** | The scheme of the identifier. See &lt;&lt;_receiver_identifiers_list&gt;&gt; for a list. | [optional] 
**superscheme** | **str** | The superscheme of the identifier. Should always be \&quot;iso6523-actorid-upis\&quot;. | [optional] 

## Example

```python
from openapi_client.models.peppol_identifier import PeppolIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of PeppolIdentifier from a JSON string
peppol_identifier_instance = PeppolIdentifier.from_json(json)
# print the JSON string representation of the object
print(PeppolIdentifier.to_json())

# convert the object into a dict
peppol_identifier_dict = peppol_identifier_instance.to_dict()
# create an instance of PeppolIdentifier from a dict
peppol_identifier_from_dict = PeppolIdentifier.from_dict(peppol_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


