# DashConfig

`DASH` manifest configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**segment_reference_scheme** | **str** | The segment reference scheme for a &#x60;DASH&#x60; manifest. The default is &#x60;SEGMENT_LIST&#x60;. | [optional] 

## Example

```python
from openapi_client.models.dash_config import DashConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DashConfig from a JSON string
dash_config_instance = DashConfig.from_json(json)
# print the JSON string representation of the object
print(DashConfig.to_json())

# convert the object into a dict
dash_config_dict = dash_config_instance.to_dict()
# create an instance of DashConfig from a dict
dash_config_from_dict = DashConfig.from_dict(dash_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


