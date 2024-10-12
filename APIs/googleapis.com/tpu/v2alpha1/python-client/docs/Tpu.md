# Tpu

Details of the TPU resource(s) being requested.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_spec** | [**List[NodeSpec]**](NodeSpec.md) | The TPU node(s) being requested. | [optional] 

## Example

```python
from openapi_client.models.tpu import Tpu

# TODO update the JSON string below
json = "{}"
# create an instance of Tpu from a JSON string
tpu_instance = Tpu.from_json(json)
# print the JSON string representation of the object
print(Tpu.to_json())

# convert the object into a dict
tpu_dict = tpu_instance.to_dict()
# create an instance of Tpu from a dict
tpu_from_dict = Tpu.from_dict(tpu_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


