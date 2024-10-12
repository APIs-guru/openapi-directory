# OverrideInlineSource

Import data embedded in the request message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overrides** | [**List[QuotaOverride]**](QuotaOverride.md) | The overrides to create. Each override must have a value for &#39;metric&#39; and &#39;unit&#39;, to specify which metric and which limit the override should be applied to. The &#39;name&#39; field of the override does not need to be set; it is ignored. | [optional] 

## Example

```python
from openapi_client.models.override_inline_source import OverrideInlineSource

# TODO update the JSON string below
json = "{}"
# create an instance of OverrideInlineSource from a JSON string
override_inline_source_instance = OverrideInlineSource.from_json(json)
# print the JSON string representation of the object
print(OverrideInlineSource.to_json())

# convert the object into a dict
override_inline_source_dict = override_inline_source_instance.to_dict()
# create an instance of OverrideInlineSource from a dict
override_inline_source_from_dict = OverrideInlineSource.from_dict(override_inline_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


