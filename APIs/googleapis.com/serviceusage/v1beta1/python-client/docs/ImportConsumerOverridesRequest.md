# ImportConsumerOverridesRequest

Request message for ImportConsumerOverrides

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**force** | **bool** | Whether to force the creation of the quota overrides. Setting the force parameter to &#39;true&#39; ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. | [optional] 
**force_only** | **List[str]** | The list of quota safety checks to ignore before the override mutation. Unlike &#39;force&#39; field that ignores all the quota safety checks, the &#39;force_only&#39; field ignores only the specified checks; other checks are still enforced. The &#39;force&#39; and &#39;force_only&#39; fields cannot both be set. | [optional] 
**inline_source** | [**OverrideInlineSource**](OverrideInlineSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_consumer_overrides_request import ImportConsumerOverridesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportConsumerOverridesRequest from a JSON string
import_consumer_overrides_request_instance = ImportConsumerOverridesRequest.from_json(json)
# print the JSON string representation of the object
print(ImportConsumerOverridesRequest.to_json())

# convert the object into a dict
import_consumer_overrides_request_dict = import_consumer_overrides_request_instance.to_dict()
# create an instance of ImportConsumerOverridesRequest from a dict
import_consumer_overrides_request_from_dict = ImportConsumerOverridesRequest.from_dict(import_consumer_overrides_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


