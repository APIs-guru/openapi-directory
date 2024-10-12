# CertificateMapEntry

Defines a certificate map entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificates** | **List[str]** | A set of Certificates defines for the given &#x60;hostname&#x60;. There can be defined up to four certificates in each Certificate Map Entry. Each certificate must match pattern &#x60;projects/*/locations/*/certificates/*&#x60;. | [optional] 
**create_time** | **str** | Output only. The creation timestamp of a Certificate Map Entry. | [optional] [readonly] 
**description** | **str** | One or more paragraphs of text description of a certificate map entry. | [optional] 
**hostname** | **str** | A Hostname (FQDN, e.g. &#x60;example.com&#x60;) or a wildcard hostname expression (&#x60;*.example.com&#x60;) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate. | [optional] 
**labels** | **Dict[str, str]** | Set of labels associated with a Certificate Map Entry. | [optional] 
**matcher** | **str** | A predefined matcher for particular cases, other than SNI selection. | [optional] 
**name** | **str** | A user-defined name of the Certificate Map Entry. Certificate Map Entry names must be unique globally and match pattern &#x60;projects/*/locations/*/certificateMaps/*/certificateMapEntries/*&#x60;. | [optional] 
**state** | **str** | Output only. A serving state of this Certificate Map Entry. | [optional] [readonly] 
**update_time** | **str** | Output only. The update timestamp of a Certificate Map Entry. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate_map_entry import CertificateMapEntry

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateMapEntry from a JSON string
certificate_map_entry_instance = CertificateMapEntry.from_json(json)
# print the JSON string representation of the object
print(CertificateMapEntry.to_json())

# convert the object into a dict
certificate_map_entry_dict = certificate_map_entry_instance.to_dict()
# create an instance of CertificateMapEntry from a dict
certificate_map_entry_from_dict = CertificateMapEntry.from_dict(certificate_map_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


