# RosettaNetPipBusinessDocument

The RosettaNet ProcessConfiguration business document settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The business document description. | [optional] 
**name** | **str** | The business document name. | 
**version** | **str** | The business document version. | 

## Example

```python
from openapi_client.models.rosetta_net_pip_business_document import RosettaNetPipBusinessDocument

# TODO update the JSON string below
json = "{}"
# create an instance of RosettaNetPipBusinessDocument from a JSON string
rosetta_net_pip_business_document_instance = RosettaNetPipBusinessDocument.from_json(json)
# print the JSON string representation of the object
print(RosettaNetPipBusinessDocument.to_json())

# convert the object into a dict
rosetta_net_pip_business_document_dict = rosetta_net_pip_business_document_instance.to_dict()
# create an instance of RosettaNetPipBusinessDocument from a dict
rosetta_net_pip_business_document_from_dict = RosettaNetPipBusinessDocument.from_dict(rosetta_net_pip_business_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


