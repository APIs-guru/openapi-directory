# ConsumerPscConfig

Allow the producer to specify which consumers can connect to it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_global_access** | **bool** | This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region. | [optional] 
**network** | **str** | The resource path of the consumer network where PSC connections are allowed to be created in. Note, this network does not need be in the ConsumerPscConfig.project in the case of SharedVPC. Example: projects/{projectNumOrId}/global/networks/{networkId}. | [optional] 
**project** | **str** | The consumer project where PSC connections are allowed to be created in. | [optional] 
**state** | **str** | Output only. Overall state of PSC Connections management for this consumer psc config. | [optional] [readonly] 

## Example

```python
from openapi_client.models.consumer_psc_config import ConsumerPscConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerPscConfig from a JSON string
consumer_psc_config_instance = ConsumerPscConfig.from_json(json)
# print the JSON string representation of the object
print(ConsumerPscConfig.to_json())

# convert the object into a dict
consumer_psc_config_dict = consumer_psc_config_instance.to_dict()
# create an instance of ConsumerPscConfig from a dict
consumer_psc_config_from_dict = ConsumerPscConfig.from_dict(consumer_psc_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


