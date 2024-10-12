# V1Beta1QuotaOverride

A quota override

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_override_ancestor** | **str** | The resource name of the ancestor that requested the override. For example: \&quot;organizations/12345\&quot; or \&quot;folders/67890\&quot;. Used by admin overrides only. | [optional] 
**dimensions** | **Dict[str, str]** |  If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit. For example, an override on a limit with the unit 1/{project}/{region} could contain an entry with the key \&quot;region\&quot; and the value \&quot;us-east-1\&quot;; the override is only applied to quota consumed in that region. This map has the following restrictions: * Keys that are not defined in the limit&#39;s unit are not valid keys. Any string appearing in {brackets} in the unit (besides {project} or {user}) is a defined key. * \&quot;project\&quot; is not a valid key; the project is already specified in the parent resource name. * \&quot;user\&quot; is not a valid key; the API does not support quota overrides that apply only to a specific user. * If \&quot;region\&quot; appears as a key, its value must be a valid Cloud region. * If \&quot;zone\&quot; appears as a key, its value must be a valid Cloud zone. * If any valid key other than \&quot;region\&quot; or \&quot;zone\&quot; appears in the map, then all valid keys other than \&quot;region\&quot; or \&quot;zone\&quot; must also appear in the map. | [optional] 
**metric** | **str** | The name of the metric to which this override applies. An example name would be: &#x60;compute.googleapis.com/cpus&#x60; | [optional] 
**name** | **str** | The resource name of the producer override. An example name would be: &#x60;services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d&#x60; | [optional] 
**override_value** | **str** | The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota). | [optional] 
**unit** | **str** | The limit unit of the limit to which this override applies. An example unit would be: &#x60;1/{project}/{region}&#x60; Note that &#x60;{project}&#x60; and &#x60;{region}&#x60; are not placeholders in this example; the literal characters &#x60;{&#x60; and &#x60;}&#x60; occur in the string. | [optional] 

## Example

```python
from openapi_client.models.v1_beta1_quota_override import V1Beta1QuotaOverride

# TODO update the JSON string below
json = "{}"
# create an instance of V1Beta1QuotaOverride from a JSON string
v1_beta1_quota_override_instance = V1Beta1QuotaOverride.from_json(json)
# print the JSON string representation of the object
print(V1Beta1QuotaOverride.to_json())

# convert the object into a dict
v1_beta1_quota_override_dict = v1_beta1_quota_override_instance.to_dict()
# create an instance of V1Beta1QuotaOverride from a dict
v1_beta1_quota_override_from_dict = V1Beta1QuotaOverride.from_dict(v1_beta1_quota_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


