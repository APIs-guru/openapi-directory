# XPSExampleSet

Set of examples or input sources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_spec** | [**XPSFileSpec**](XPSFileSpec.md) |  | [optional] 
**fingerprint** | **str** | Fingerprint of the example set. | [optional] 
**num_examples** | **str** | Number of examples. | [optional] 
**num_input_sources** | **str** | Number of input sources. | [optional] 

## Example

```python
from openapi_client.models.xps_example_set import XPSExampleSet

# TODO update the JSON string below
json = "{}"
# create an instance of XPSExampleSet from a JSON string
xps_example_set_instance = XPSExampleSet.from_json(json)
# print the JSON string representation of the object
print(XPSExampleSet.to_json())

# convert the object into a dict
xps_example_set_dict = xps_example_set_instance.to_dict()
# create an instance of XPSExampleSet from a dict
xps_example_set_from_dict = XPSExampleSet.from_dict(xps_example_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


