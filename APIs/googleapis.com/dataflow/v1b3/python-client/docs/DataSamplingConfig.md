# DataSamplingConfig

Configuration options for sampling elements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**behaviors** | **List[str]** | List of given sampling behaviors to enable. For example, specifying behaviors &#x3D; [ALWAYS_ON] samples in-flight elements but does not sample exceptions. Can be used to specify multiple behaviors like, behaviors &#x3D; [ALWAYS_ON, EXCEPTIONS] for specifying periodic sampling and exception sampling. If DISABLED is in the list, then sampling will be disabled and ignore the other given behaviors. Ordering does not matter. | [optional] 

## Example

```python
from openapi_client.models.data_sampling_config import DataSamplingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DataSamplingConfig from a JSON string
data_sampling_config_instance = DataSamplingConfig.from_json(json)
# print the JSON string representation of the object
print(DataSamplingConfig.to_json())

# convert the object into a dict
data_sampling_config_dict = data_sampling_config_instance.to_dict()
# create an instance of DataSamplingConfig from a dict
data_sampling_config_from_dict = DataSamplingConfig.from_dict(data_sampling_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


