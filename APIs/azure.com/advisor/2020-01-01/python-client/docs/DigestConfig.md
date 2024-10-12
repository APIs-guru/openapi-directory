# DigestConfig

Advisor Digest configuration entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_group_resource_id** | **str** | Action group resource id used by digest. | [optional] 
**categories** | **List[str]** | Categories to send digest for. If categories are not provided, then digest will be sent for all categories. | [optional] 
**frequency** | **int** | Frequency that digest will be triggered, in days. Value must be between 7 and 30 days inclusive. | [optional] 
**language** | **str** | Language for digest content body. Value must be ISO 639-1 code for one of Azure portal supported languages. Otherwise, it will be converted into one. Default value is English (en). | [optional] 
**name** | **str** | Name of digest configuration. Value is case-insensitive and must be unique within a subscription. | [optional] 
**state** | **str** | State of digest configuration. | [optional] 

## Example

```python
from openapi_client.models.digest_config import DigestConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DigestConfig from a JSON string
digest_config_instance = DigestConfig.from_json(json)
# print the JSON string representation of the object
print(DigestConfig.to_json())

# convert the object into a dict
digest_config_dict = digest_config_instance.to_dict()
# create an instance of DigestConfig from a dict
digest_config_from_dict = DigestConfig.from_dict(digest_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


