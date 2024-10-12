# OnPremisesConfiguration

On-premises instance configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_certificate** | **str** | PEM representation of the trusted CA&#39;s x509 certificate. | [optional] 
**client_certificate** | **str** | PEM representation of the replica&#39;s x509 certificate. | [optional] 
**client_key** | **str** | PEM representation of the replica&#39;s private key. The corresponsing public key is encoded in the client&#39;s certificate. | [optional] 
**dump_file_path** | **str** | The dump file to create the Cloud SQL replica. | [optional] 
**host_port** | **str** | The host and port of the on-premises instance in host:port format | [optional] 
**kind** | **str** | This is always &#x60;sql#onPremisesConfiguration&#x60;. | [optional] 
**password** | **str** | The password for connecting to on-premises instance. | [optional] 
**source_instance** | [**InstanceReference**](InstanceReference.md) |  | [optional] 
**username** | **str** | The username for connecting to on-premises instance. | [optional] 

## Example

```python
from openapi_client.models.on_premises_configuration import OnPremisesConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of OnPremisesConfiguration from a JSON string
on_premises_configuration_instance = OnPremisesConfiguration.from_json(json)
# print the JSON string representation of the object
print(OnPremisesConfiguration.to_json())

# convert the object into a dict
on_premises_configuration_dict = on_premises_configuration_instance.to_dict()
# create an instance of OnPremisesConfiguration from a dict
on_premises_configuration_from_dict = OnPremisesConfiguration.from_dict(on_premises_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


