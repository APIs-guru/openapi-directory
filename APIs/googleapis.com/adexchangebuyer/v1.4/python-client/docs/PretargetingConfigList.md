# PretargetingConfigList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[PretargetingConfig]**](PretargetingConfig.md) | A list of pretargeting configs | [optional] 
**kind** | **str** | Resource type. | [optional] [default to 'adexchangebuyer#pretargetingConfigList']

## Example

```python
from openapi_client.models.pretargeting_config_list import PretargetingConfigList

# TODO update the JSON string below
json = "{}"
# create an instance of PretargetingConfigList from a JSON string
pretargeting_config_list_instance = PretargetingConfigList.from_json(json)
# print the JSON string representation of the object
print(PretargetingConfigList.to_json())

# convert the object into a dict
pretargeting_config_list_dict = pretargeting_config_list_instance.to_dict()
# create an instance of PretargetingConfigList from a dict
pretargeting_config_list_from_dict = PretargetingConfigList.from_dict(pretargeting_config_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


