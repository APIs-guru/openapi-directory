# DiscoverableParticipant

A participant to be discovered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_types** | **List[str]** | An array of document types to discover. The default is &#39;[\&quot;invoice\&quot;, \&quot;creditnote\&quot;]&#39;. This is ignored when only checking existence. | [optional] 
**identifier** | **str** | The actual identifier. | 
**meta_scheme** | **str** | The meta scheme of the identifier. For Peppol this is always &#39;iso6523-actorid-upis&#39;. | [optional] [default to 'iso6523-actorid-upis']
**network** | **str** | The network to check. Currently only &#39;peppol&#39; is supported. | [optional] [default to 'peppol']
**scheme** | **str** | The scheme of the identifier. See &lt;&lt;_receiver_identifiers_list&gt;&gt; for a list. | 

## Example

```python
from openapi_client.models.discoverable_participant import DiscoverableParticipant

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoverableParticipant from a JSON string
discoverable_participant_instance = DiscoverableParticipant.from_json(json)
# print the JSON string representation of the object
print(DiscoverableParticipant.to_json())

# convert the object into a dict
discoverable_participant_dict = discoverable_participant_instance.to_dict()
# create an instance of DiscoverableParticipant from a dict
discoverable_participant_from_dict = DiscoverableParticipant.from_dict(discoverable_participant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


