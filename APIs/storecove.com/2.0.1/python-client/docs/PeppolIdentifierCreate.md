# PeppolIdentifierCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**corppass** | [**CorpPassCreate**](CorpPassCreate.md) |  | [optional] 
**identifier** | **str** | The identifier. | 
**scheme** | **str** | The scheme of the identifier. See &lt;&lt;_receiver_identifiers_list&gt;&gt; for a list. | 
**superscheme** | **str** | The superscheme of the identifier. Should always be \&quot;iso6523-actorid-upis\&quot;. | 

## Example

```python
from openapi_client.models.peppol_identifier_create import PeppolIdentifierCreate

# TODO update the JSON string below
json = "{}"
# create an instance of PeppolIdentifierCreate from a JSON string
peppol_identifier_create_instance = PeppolIdentifierCreate.from_json(json)
# print the JSON string representation of the object
print(PeppolIdentifierCreate.to_json())

# convert the object into a dict
peppol_identifier_create_dict = peppol_identifier_create_instance.to_dict()
# create an instance of PeppolIdentifierCreate from a dict
peppol_identifier_create_from_dict = PeppolIdentifierCreate.from_dict(peppol_identifier_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


