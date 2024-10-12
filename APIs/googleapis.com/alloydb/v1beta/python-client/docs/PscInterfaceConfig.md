# PscInterfaceConfig

Configuration for setting up a PSC interface. This information needs to be provided by the customer. PSC interfaces will be created and added to VMs via SLM (adding a network interface will require recreating the VM). For HA instances this will be done via LDTM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_endpoint_ips** | **List[str]** | A list of endpoints in the consumer VPC the interface might initiate outbound connections to. This list has to be provided when the PSC interface is created. | [optional] 
**network_attachment** | **str** | The NetworkAttachment resource created in the consumer VPC to which the PSC interface will be linked, in the form of: &#x60;projects/${CONSUMER_PROJECT}/regions/${REGION}/networkAttachments/${NETWORK_ATTACHMENT_NAME}&#x60;. NetworkAttachment has to be provided when the PSC interface is created. | [optional] 

## Example

```python
from openapi_client.models.psc_interface_config import PscInterfaceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PscInterfaceConfig from a JSON string
psc_interface_config_instance = PscInterfaceConfig.from_json(json)
# print the JSON string representation of the object
print(PscInterfaceConfig.to_json())

# convert the object into a dict
psc_interface_config_dict = psc_interface_config_instance.to_dict()
# create an instance of PscInterfaceConfig from a dict
psc_interface_config_from_dict = PscInterfaceConfig.from_dict(psc_interface_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


