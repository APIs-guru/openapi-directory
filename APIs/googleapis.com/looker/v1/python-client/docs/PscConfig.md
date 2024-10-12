# PscConfig

Information for Private Service Connect (PSC) setup for a Looker instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_vpcs** | **List[str]** | Optional. List of VPCs that are allowed ingress into looker. Format: projects/{project}/global/networks/{network} | [optional] 
**looker_service_attachment_uri** | **str** | Output only. URI of the Looker service attachment. | [optional] [readonly] 
**service_attachments** | [**List[ServiceAttachment]**](ServiceAttachment.md) | Optional. List of egress service attachment configurations. | [optional] 

## Example

```python
from openapi_client.models.psc_config import PscConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PscConfig from a JSON string
psc_config_instance = PscConfig.from_json(json)
# print the JSON string representation of the object
print(PscConfig.to_json())

# convert the object into a dict
psc_config_dict = psc_config_instance.to_dict()
# create an instance of PscConfig from a dict
psc_config_from_dict = PscConfig.from_dict(psc_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


