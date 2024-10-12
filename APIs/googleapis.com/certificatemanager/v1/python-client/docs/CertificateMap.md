# CertificateMap

Defines a collection of certificate configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The creation timestamp of a Certificate Map. | [optional] [readonly] 
**description** | **str** | One or more paragraphs of text description of a certificate map. | [optional] 
**gclb_targets** | [**List[GclbTarget]**](GclbTarget.md) | Output only. A list of GCLB targets that use this Certificate Map. A Target Proxy is only present on this list if it&#39;s attached to a Forwarding Rule. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Set of labels associated with a Certificate Map. | [optional] 
**name** | **str** | A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match pattern &#x60;projects/*/locations/*/certificateMaps/*&#x60;. | [optional] 
**update_time** | **str** | Output only. The update timestamp of a Certificate Map. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate_map import CertificateMap

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateMap from a JSON string
certificate_map_instance = CertificateMap.from_json(json)
# print the JSON string representation of the object
print(CertificateMap.to_json())

# convert the object into a dict
certificate_map_dict = certificate_map_instance.to_dict()
# create an instance of CertificateMap from a dict
certificate_map_from_dict = CertificateMap.from_dict(certificate_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


