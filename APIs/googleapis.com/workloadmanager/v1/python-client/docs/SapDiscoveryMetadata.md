# SapDiscoveryMetadata

Message describing SAP discovery system metadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_region** | **str** | Optional. Customer region string for customer&#39;s use. Does not represent GCP region. | [optional] 
**defined_system** | **str** | Optional. Customer defined, something like \&quot;E-commerce pre prod\&quot; | [optional] 
**environment_type** | **str** | Optional. Should be \&quot;prod\&quot;, \&quot;QA\&quot;, \&quot;dev\&quot;, \&quot;staging\&quot;, etc. | [optional] 
**sap_product** | **str** | Optional. This SAP product name | [optional] 

## Example

```python
from openapi_client.models.sap_discovery_metadata import SapDiscoveryMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SapDiscoveryMetadata from a JSON string
sap_discovery_metadata_instance = SapDiscoveryMetadata.from_json(json)
# print the JSON string representation of the object
print(SapDiscoveryMetadata.to_json())

# convert the object into a dict
sap_discovery_metadata_dict = sap_discovery_metadata_instance.to_dict()
# create an instance of SapDiscoveryMetadata from a dict
sap_discovery_metadata_from_dict = SapDiscoveryMetadata.from_dict(sap_discovery_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


