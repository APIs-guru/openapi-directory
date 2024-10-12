# ProducerPscConfig

The PSC configurations on producer side.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_attachment_uri** | **str** | The resource path of a service attachment. Example: projects/{projectNumOrId}/regions/{region}/serviceAttachments/{resourceId}. | [optional] 

## Example

```python
from openapi_client.models.producer_psc_config import ProducerPscConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ProducerPscConfig from a JSON string
producer_psc_config_instance = ProducerPscConfig.from_json(json)
# print the JSON string representation of the object
print(ProducerPscConfig.to_json())

# convert the object into a dict
producer_psc_config_dict = producer_psc_config_instance.to_dict()
# create an instance of ProducerPscConfig from a dict
producer_psc_config_from_dict = ProducerPscConfig.from_dict(producer_psc_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


