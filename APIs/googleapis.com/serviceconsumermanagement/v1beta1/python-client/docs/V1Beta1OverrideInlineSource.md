# V1Beta1OverrideInlineSource

Import data embedded in the request message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overrides** | [**List[V1Beta1QuotaOverride]**](V1Beta1QuotaOverride.md) | The overrides to create. Each override must have a value for &#39;metric&#39; and &#39;unit&#39;, to specify which metric and which limit the override should be applied to. The &#39;name&#39; field of the override does not need to be set; it is ignored. | [optional] 

## Example

```python
from openapi_client.models.v1_beta1_override_inline_source import V1Beta1OverrideInlineSource

# TODO update the JSON string below
json = "{}"
# create an instance of V1Beta1OverrideInlineSource from a JSON string
v1_beta1_override_inline_source_instance = V1Beta1OverrideInlineSource.from_json(json)
# print the JSON string representation of the object
print(V1Beta1OverrideInlineSource.to_json())

# convert the object into a dict
v1_beta1_override_inline_source_dict = v1_beta1_override_inline_source_instance.to_dict()
# create an instance of V1Beta1OverrideInlineSource from a dict
v1_beta1_override_inline_source_from_dict = V1Beta1OverrideInlineSource.from_dict(v1_beta1_override_inline_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


